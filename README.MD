# react-web-component

  This lib is meant to make maintaining lagacy code less painfull.
Micro frontend will reduce you legacy core enabling to integrate React (application/wigets) in it.

# Install

    npm install react-web-component
or

    yarn get react-web-component

# Usage

    import React from 'react';
    import useAsWebComponent from 'react-web-component';

    const ReactApp = () => <div>Hello, world</div>;
    
    useAsWebComponent(App);

this snipet will create `<react-app>` tag that can be used in plain html, angular template or twig.

## Attributes

To pass tag atributes to React component you have to specify them.

    import React from 'react';
    import useAsWebComponent from 'react-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    useAsWebComponent(App, ['name'])

React component will rerender on attribute change.

## Tag name

By default created tag name will be given React component name converted to `kebab-case`. You can change name of tab by specifying your desired name.

    import React from 'react';
    import useAsWebComponent from 'react-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    useAsWebComponent(App, [name], 'app')

## Attribute modifier

In some cases you may want to use use middleware to modify value before it is passed to React component. This can be usefull when implementing functionality in twig or angular apps.

    import React from 'react';
    import useAsWebComponent from 'react-web-component';

    const ReactApp = ({ name }) => <div>Hello, {name}</div>;
    
    const middleware = (value) => (
        value.includes('{') ? undefined : value
    );

    useAsWebComponent(App, [name], 'app', middleware);

# Additional stuff

If you came this far and read all that stuff above you may be planning to use this lib. If this is the case you may want to see demo. But lets be honest I know you are pro, and you will definitely checkout `package.json` to see what is available.