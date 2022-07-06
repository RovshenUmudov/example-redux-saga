export const GET_POSTS = "GET_POSTS"
export const SET_POSTS = "SET_POSTS"

type Post = {
    id: number,
    title: string,
    body: string
}

type InitialState = {
    posts: Post[]
}

type Action = {
    type: string,
    payload?: any
}

const initialState: InitialState = {
    posts: []
}

const postsReducer = (state = initialState, {type, payload}: Action): InitialState => {
    switch (type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: payload
            }
        }
        default:
            return state
    }
}

export const getPosts = (): Action => ({type: GET_POSTS})

export default postsReducer