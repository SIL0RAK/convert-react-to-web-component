import { createElement } from 'react';
import { unmountComponentAtNode, render } from 'react-dom';

import getAsPascalCase from './getAsPascalCase.js';
import getAsSnakeCase from './getAsSnakeCase';

/**
 * 
 * @param {React.Component} Component 
 * @param {string} name 
 * @param {function} propsModifier 
 */
const create = (
    Component,
    attributes,
    name,
    propsModifier = (prop) => prop
) => {
    const props = {};

    class WebComponent extends HTMLElement {
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
            props[getAsPascalCase(name)] = propsModifier(newValue);
            this.render();
        }

        render() {
            if (this.isConnected) {
                render(
                    createElement(Component, {...props}, null),
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