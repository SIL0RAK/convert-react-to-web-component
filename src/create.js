import { createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import getAsPascalCase from './getAsPascalCase.js';
import getAsSnakeCase from './getAsSnakeCase';

/**
 * 
 * @param {React.Component} Component 
 * @param {string} name 
 * @param {function} middleware 
 */
const create = (
    Component,
    attributes,
    name,
    middleware = (prop) => prop
) => {
    class WebComponent extends HTMLElement {
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

        attributeChangedCallback(name, oldValue, newValue) {
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