import * as actionTypes from '../actionTypes';

const initialState = {
    "hoge":"fuga"
};

const listReducer = (state = initialState,action ) =>{
    switch (action.type) {    
        case actionTypes.INIT_LIST:
        default:
            return state;
    }
};

export default listReducer;