import axios from "axios";
import {IPost} from "../redux/reducers/postsReducer";

const instance = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    })
}

const api = {
    getPosts: (count: number) => instance().get<IPost>(`posts?_limit=${count}`).then(res => res.data)
}

export default api