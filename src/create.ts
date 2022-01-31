import React, { createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import getAsPascalCase from './getAsPascalCase';
import getAsSnakeCase from './getAsSnakeCase';

interface IOptions {
    attributes?: Array<string>;
    name?: string;
    middleware: (prop: string) => string | unknown;
}

const create = (
    Component: React.FunctionComponent,
    options?: IOptions
) => {
    class WebComponent extends HTMLElement {
        private props: Record<string, unknown>;

        constructor () {
            super();

            this.props = {};
        }

        static get observedAttributes() {
            return options?.attributes || [];
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

        render() {
            if (this.isConnected) {
                render(
                    createElement(Component, {...this.props}, null),
                    this,
                );
            }
        }
    }

    const webComponentName =  options?.name || getAsSnakeCase(Component.name);

    if (customElements.get(webComponentName) === undefined) {
        customElements.define(webComponentName, WebComponent);
    }
};

export default create;