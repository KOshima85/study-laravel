import * as actionTypes from '../actionTypes';
import * as api from '../apis';

export const changeTodo = (todo) => ({
    type: actionTypes.CHANGE_TODO , todo
})

export const initList = () =>{
    return async (dispatch, getState) => {
        const data = await api.fetchTodo();
        console.log(data);

        dispatch(()=> ({type: actionTypes.INIT_LIST}));
    }
};

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