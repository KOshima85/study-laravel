import axios from 'axios';

const client = axios.create({
	// baseURL:"http://localhost:8080/api/",
	headers:{
        ContentType: 'application/json'
        // TODO: 認証処理を追加する（token?）
	},
  });

export const  fetchTodo = () => {
    return client.get("api/list")
}

export const  postTodo = (todo) => {
    return client.post("api/list",todo);
}

export const doneTodo = (id) => {
    return client.put(`api/list/${id}/done`);
}

export const doTodo = (id) => {
    return client.put(`api/list/${id}/do`);
}

export const deleteTodo = (id) => {
    return client.delete(`api/list/${id}`);
}