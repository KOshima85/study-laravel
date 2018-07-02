import * as actionTypes from '../actionTypes';
import * as api from '../apis';

export const changeTodo = (todo) => ({
    type: actionTypes.CHANGE_TODO , todo
})

export const initList = () =>{
    return async (dispatch, getState) => {
        const { data:list } = await api.fetchTodo();
        dispatch(setList(list));
    }
};

const setList = (list) => ({
    type: actionTypes.INIT_LIST, list
})

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO, id
})

export const submitTodo = () => {
    return async (dispatch, getState) => {
        const { list }  = getState();
        await alert("submit");
        console.log(list);
        await api.postTodo({});
        dispatch(initList);
    };
};