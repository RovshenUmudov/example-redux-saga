export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR"

export interface IPost {
    id: number,
    title: string,
    body: string
}

type InitialState = {
    loading: boolean,
    error: string,
    posts: IPost[]
}

type Action = {
    type: string,
    payload?: any
}

const initialState: InitialState = {
    posts: [],
    loading: false,
    error: ""
}

const postsReducer = (state = initialState, {type, payload}: Action): InitialState => {
    switch (type) {
        case FETCH_POSTS: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: "",
                posts: payload
            }
        }
        case FETCH_POSTS_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload,
                posts: []
            }
        }
        default:
            return state
    }
}

export const fetchPosts = (): Action => ({type: FETCH_POSTS})

export default postsReducer