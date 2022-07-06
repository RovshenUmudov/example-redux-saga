import {fork, all} from "redux-saga/effects"
import {getPostsWatcher} from "./postsSaga";

export function* rootSaga() {
    yield all([
        fork(getPostsWatcher)
    ])
}