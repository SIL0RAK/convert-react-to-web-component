import React, { createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import getAsPascalCase from './getAsPascalCase';
import getAsSnakeCase from './getAsSnakeCase';

interface IOptions {
    attributes?: Array<string>;
    name?: string;
    middleware: (prop: string) => string | unknown;
    shadowDom?: ShadowRootMode;
}

/** generates webComponent from provided react component and options */
const webComponentFactory = (
    Component: React.FunctionComponent,
    options?: IOptions
) => class WebComponent extends HTMLElement {
    private props: Record<string, unknown>;

    constructor () {
        super();

        this.props = {};
        // if useShadowDom enabled create shadow root and use it as mountPoint for react app
        if (options.shadowDom) {
            this.attachShadow({mode: options.shadowDom });
        }
    }

    static get observedAttributes() {
        return options?.attributes ? options?.attributes.map(getAsSnakeCase) : [];
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        unmountComponentAtNode(this);
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        this.props[getAsPascalCase(name)] = options?.middleware(newValue) || newValue;
        this.render();
    }

    private render() {
        if (this.isConnected) {
            render(
                createElement(Component, {...this.props}, null),
                options.shadowDom ? this.shadowRoot: this,
            );
        }
    }
}

const addWebComponentToCustomElements = (WebComponent: CustomElementConstructor, name: string) => {
    if (customElements.get(name) === undefined) {
        customElements.define(name, WebComponent);
    }
};

/** generates webComponent and adds it to custom elements list. */
const create = (Component: React.FunctionComponent, options?: IOptions) => {
    const WebComponent = webComponentFactory(Component, options);

    const webComponentName =  options?.name || getAsSnakeCase(Component.name);

    addWebComponentToCustomElements(WebComponent, webComponentName);
};

export default create;