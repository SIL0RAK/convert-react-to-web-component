import PersonScore from './PersonScore.jsx';
import create from '../dist/main.js';
import './angular-app.js';

const middleware = (value) => value.includes('{{') ? undefined : value;

create(PersonScore, ['score', 'name'],'person-score', middleware);