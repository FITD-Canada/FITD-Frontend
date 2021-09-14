import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { apiDeleteUser } from '../api';
import * as types from '../constants/actionTypes';

function* deleteUser(action) {
  console.log('payload delete', action.payload);
  try {
    const result = yield call(apiDeleteUser, action.payload);

    console.log('delete result', result);
  } catch (error) {
    yield put({ type: types.DELETE_USER_FAIL, payload: error });
  }
}

function* watchDeleteUser() {
  yield takeEvery(types.DELETE_USER_REQUEST, deleteUser);
}

export default function* sagaDeleteUser() {
  yield all([fork(watchDeleteUser)]);
}
