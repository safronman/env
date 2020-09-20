import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
    headers: {
        'api-key': process.env.REACT_APP_API_KEY
    }
})

console.log('process.env: ', process.env)

export const todoApi = {
    getTodos() {
        return instance.get('/todo-lists')
            .then((res) => {
                console.log('todos', res.data)
            })
    }
}
