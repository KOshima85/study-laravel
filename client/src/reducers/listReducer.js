import * as actionTypes from '../actionTypes';
import * as _ from 'lodash';


const initialState = {
    list:[{
        id: 1,
        todo: "hoge",
        isDone: false
    },{
        id: 2,
        todo: "fuga",
        isDone: false
    }],
    todo: ""
};

const listReducer = (state = initialState,action ) =>{
    switch (action.type) {
        case actionTypes.CHANGE_TODO:
            return {
                ...state,
                todo: action.todo
            };
        case actionTypes.TOGGLE_TODO:
            return {
                ...state,
                list: _.map(state.list, item => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            isDone: !item.isDone
                        };
                    }else{
                        return item;
                    }
                })
            }
        case actionTypes.INIT_LIST:
            return {
                ...state,
                list:action.list
            }
        default:
            return state;
    }
};

export default listReducer;