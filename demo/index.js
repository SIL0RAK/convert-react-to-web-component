import PersonScore from './PersonScore.jsx';
import create from '../dist/main.js';
import './angular-app.js';

const middleware = (value) => value.includes('{{') ? undefined : value;

const options = {
    attributes: ['score', 'person-name'], // list of attributes to listen for. Notice that attribute will be converted to camelCase
    name: 'person-score',  // optional parameter to rename component if not provided will use react component name.
    middleware, // middleware for parsing attributes. Usefull with frameworks that use templates.
    useShadowDom: true
};

create(PersonScore, options);