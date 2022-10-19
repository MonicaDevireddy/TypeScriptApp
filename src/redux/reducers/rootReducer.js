import { combineReducers } from 'redux';
import todosReducers from './todosReducers';

const rootReducer = combineReducers({
    todosReducer: todosReducers.todosReducer
});

export default rootReducer;