import { combineReducers } from 'redux';

import list from './listReducer';

const reducers = combineReducers({
    list
});

export default reducers;