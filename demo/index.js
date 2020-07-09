import PersonScore from './PersonScore.jsx';
import create from '../src/create.js';
import angularApp from './angular-app.js';

const middleware = (value) => value.includes('{{') ? undefined : value;

create(PersonScore, ['score', 'name'],'person-score', middleware);