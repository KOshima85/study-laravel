import axios from 'axios';

const client = axios.create({
	baseURL:"http://localhost:8080/api/v1",
	headers:{
		ContentType: 'application/json'
	},
  });

export const  postTodo = (todo) => {
    return new Promise((resolve)=>{
        resolve();
    });
}