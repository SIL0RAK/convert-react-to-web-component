![npm](https://img.shields.io/npm/v/convert-react-to-web-component)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/SIL0RAK/convert-react-to-web-component)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/SIL0RAK/convert-react-to-web-component/Node.js%20CI)


# React to Web Component

  This library is meant to make maintaining legacy code less painful. Micro frontend will reduce your legacy core complexity enabling you to integrate React (application/widgets) in it.
  
  **Warning**
  This library is not tested with react 18.

# Install

    npm install convert-react-to-web-component
    
 or

    yarn add convert-react-to-web-component

and don't forget to install peer dependencies:
    
   * react
   * react-dom

# Usage

```javascript
import React from 'react';
import reactToWebComponent from 'convert-react-to-web-component';

const ReactApp = () => <div>Hello, world</div>;

reactToWebComponent(ReactApp);
```

this snippet will create `<react-app>` tag that can be used in plain html, angular template or twig.

## Attributes

To pass tag attributes to React component you have to specify them.

```javascript
import React from 'react';
import reactToWebComponent from 'convert-react-to-web-component';

const ReactApp = ({ name, userLastName }) => (
  <div>Hello, {name} {userLastName}</div>
);

reactToWebComponent(ReactApp, { attributes: ['name', 'userLastName'] });
```

Attributes should be passed as kebab-case to your element.

```html
  <div>
    <react-app name="john" user-last-name="Cena">
  </div>
```

React component will rerender on attribute change.

## Tag name

By default created tag name will be given React component name converted to `kebab-case`. You can change name of tab by specifying your desired name.

```javascript
import React from 'react';
import reactToWebComponent from 'convert-react-to-web-component';

const ReactApp = ({ name }) => <div>Hello, {name}</div>;

reactToWebComponent(ReactApp, { attributes: ['name']; name: 'app' });
```

now you can call you component with `<app>` tag.

## Attribute modifier (middleware)

In some cases, you may want to use middleware to modify value before it is passed to React component. This can be useful when implementing functionality in twig or angular apps.

```javascript
import React from 'react';
import reactToWebComponent from 'convert-react-to-web-component';

const ReactApp = ({ name }) => <div>Hello, {name}</div>;

const middleware = (value) => (
    value.includes('{') ? undefined : value
);

reactToWebComponent(ReactApp, { attributes: ['name'], middleware });
```
## Shadow DOM


 To prevent style interference between parent application and your react app you can pass `shadowDom` property which will create shadow root and mount react app to it.

```javascript
import React from 'react';
import reactToWebComponent from 'convert-react-to-web-component';

const ReactApp = () => <div>Hello, World</div>;

reactToWebComponent(ReactApp, { shadowDom: "open" });
```

# Additional stuff

If you came this far and read all that stuff above you may be planning to use this lib. If this is the case you may want to see a demo. But let's be honest I know you are pro, and you will definitely check out `package.json` to see what is available.