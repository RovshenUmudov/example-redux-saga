import {takeLatest, put} from "redux-saga/effects"
import {GET_POSTS, SET_POSTS} from "../reducers/postsReducer";
import api from "../../api";

function* getPostsWorker() {
    try {
        const posts = yield api.getPosts(5)
        yield put({type: SET_POSTS, payload: posts})
    } catch (e) {
        console.log(e.message);
    }
}

export function* getPostsWatcher() {
    yield takeLatest(GET_POSTS, getPostsWorker)
}