import { put } from 'redux-saga/effects';
import * as API from '../api';
import { getUsersRequest, getUsersSuccess, getUsersError } from '../actions';
import { getUserRequest, getUserSuccess, getUserError } from '../actions';
import {
  createUserRequest,
  createUserSuccess,
  createUserError,
} from '../actions';

export function* getUsersSaga() {
  yield put(getUsersRequest());
  try {
    const {
      data: { data: users },
    } = yield API.getUsers();
    
    console.log(users);
    yield put(getUsersSuccess(users));
  } catch (e) {
    yield put(getUsersError(e));
  }
}

export function* createUserSaga(action) {
  const { user } = action;
  yield put(createUserRequest());
  try {
    const {
      data: { data: newUser },
    } = yield API.createUser(user);
    yield put(createUserSuccess(newUser));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function* getUserSaga(action) {
  const { id } = action;
  yield put(getUserRequest());
  try {
    yield API.getUserById(id);
    yield put(getUserSuccess(id));
  } catch (e) {
    yield put(getUserError(e));
  }
}