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
    return new Promise((resolve)=>{
        resolve();
    });
}