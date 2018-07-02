import { combineReducers } from 'redux';

import list from './ListReducer';

const reducers = combineReducers({
    list
});

export default reducers;