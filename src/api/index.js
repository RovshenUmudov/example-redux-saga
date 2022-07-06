import axios from "axios";

const instance = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    })
}

const api = {
    getPosts: (count) => instance().get(`posts?_limit=${count}`).then(res => res.data)
}

export default api