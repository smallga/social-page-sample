import { sagaAction } from "./sagaAction";
import { put, takeLatest, all, call, takeEvery } from "redux-saga/effects";
import { getPost } from "../../server/post";
import { AxiosResponse } from "axios";
import { addPost, getPostsFirst, getPreviosPost, setPostIsFetchComplete, setPostIsFetching, setPosts } from "../reducers/post-slice";
import { PostModel } from "../../utility/interface/post-model";


function* getPreviousPosts(): Generator<any, any, any> {
  yield (put(setPostIsFetching()))
  const data = yield call(getPost);
  yield (put(setPostIsFetchComplete()))
  yield put(addPost(data.data.data));
}

function* getFirstPosts(): Generator<any, any, any> {
  yield (put(setPostIsFetching()))
  const data = yield call(getPost);
  yield (put(setPostIsFetchComplete()))
  yield put(setPosts(data.data.data));
}


function* rootSaga() {
  yield all([takeEvery(getPreviosPost.type, getPreviousPosts), takeLatest(getPostsFirst.type, getFirstPosts)]);
}

export default rootSaga;

