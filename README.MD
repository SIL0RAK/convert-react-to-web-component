# React to Web Component

  This lib is meant to make maintaining lagacy code less painfull.
Micro frontend will reduce you legacy core enabling to integrate React (application/wigets) in it.

# Install

    npm install react-to-web-component
or

    yarn get react-to-web-component

# Usage

    import React from 'react';
    import reactToWebComponent from 'react-to-web-component';

    const ReactApp = () => <div>Hello, world</div>;
    
    reactToWebComponent(App);

this snippet will create `<react-app>` tag that can be used in plain html, angular template or twig.

## Attributes

To pass tag attributes to React component you have to specify them.

    import React from 'react';
    import reactToWebComponent from 'react-to-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    reactToWebComponent(App, ['name']);

React component will rerender on attribute change.

## Tag name

By default created tag name will be given React component name converted to `kebab-case`. You can change name of tab by specifying your desired name.

    import React from 'react';
    import reactToWebComponent from 'react-to-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    reactToWebComponent(App, ['name'], 'app');

now you can call you component with `<app>` tag.

## Attribute modifier

In some cases you may want to use use middleware to modify value before it is passed to React component. This can be useful when implementing functionality in twig or angular apps.

    import React from 'react';
    import reactToWebComponent from 'react-to-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    const middleware = (value) => (
        value.includes('{') ? undefined : value
    );

    reactToWebComponent(App, ['name'], 'app', middleware);

# Additional stuff

If you came this far and read all that stuff above you may be planning to use this lib. If this is the case you may want to see demo. But lets be honest I know you are pro, and you will definitely checkout `package.json` to see what is available.