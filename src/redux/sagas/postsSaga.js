import {takeLatest, put} from "redux-saga/effects"
import {FETCH_POSTS, FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS} from "../reducers/postsReducer";
import api from "../../api";

function* getPostsWorker() {
    try {
        const posts = yield api.getPosts(5)
        console.log(posts);
        yield put({type: FETCH_POSTS_SUCCESS, payload: posts})
    } catch {
        yield put({type: FETCH_POSTS_ERROR, payload: "Error: Posts not loading"})
    }
}

export function* getPostsWatcher() {
    yield takeLatest(FETCH_POSTS, getPostsWorker)
}