import React, { createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import getAsPascalCase from './getAsPascalCase';
import getAsSnakeCase from './getAsSnakeCase';

const create = (
    Component: React.FunctionComponent,
    attributes: Array<string> = [],
    name?: string,
    middleware = (prop: string): string | unknown => prop
) => {
    class WebComponent extends HTMLElement {
        private props: Record<string, unknown>;

        constructor () {
            super();

            this.props = {};
        }

        static get observedAttributes() {
            return attributes;
        }

        connectedCallback() {
            this.render();
        }

        disconnectedCallback() {
            unmountComponentAtNode(this);
        }

        attributeChangedCallback(name, _oldValue, newValue) {
            this.props[getAsPascalCase(name)] = middleware(newValue);
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

    const webComponentName =  name || getAsSnakeCase(Component.name);

    if (customElements.get(webComponentName) === undefined) {
        customElements.define(webComponentName, WebComponent);
    }
};

export default create;