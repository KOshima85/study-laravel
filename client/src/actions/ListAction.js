import * as actionTypes from '../actionTypes';
import * as api from '../apis';
import * as _ from 'lodash';

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

const clearTodo = () => ({
    type: actionTypes.CLEAR_TODO
})

export const toggleTodo = (id) => {
    return async (dispatch, getState) => {
        // todoの状態で切り分け
        const {list} = getState();
        const todo = _.find(list.list, {id});
        if(todo.is_done){
            await api.doTodo(id);
        }else{
            await api.doneTodo(id);
        }
        dispatch(initList());
    }
}

export const submitTodo = () => {
    return async (dispatch, getState) => {
        const { list }  = getState();
        await api.postTodo({todo:list.todo});
        dispatch(initList());
        dispatch(clearTodo());
    };
};

export const deleteTodo = (id) => {
    return async (dispatch, getState) => {
        await api.deleteTodo(id);
        dispatch(initList());
    };
};
