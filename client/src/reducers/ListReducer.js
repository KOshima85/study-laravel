import * as actionTypes from '../actionTypes';
import * as _ from 'lodash';


const initialState = {
    list:[],
    todo: "",
    showDone: false
};

const ListReducer = (state = initialState,action ) =>{
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
        case actionTypes.CLEAR_TODO:
            return {
                ...state,
                todo:""
            }
        case actionTypes.SET_SHOW_DONE:
            return {
                ...state,
                showDone: action.showDone
            }
        default:
            return state;
    }
};

export default ListReducer;