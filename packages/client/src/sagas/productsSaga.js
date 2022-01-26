import { put } from 'redux-saga/effects';
import * as API from '../api';
import { getProductsRequest, getProductsSuccess, getProductsError } from '../actions';
import { getProductRequest, getProductSuccess, getProductError } from '../actions';
import {
  createProductRequest,
  createProductSuccess,
  createProductError,
} from '../actions';

export function* getProductsSaga() {
  yield put(getProductsRequest());
  try {
    const {
      data: { data: products },
    } = yield API.getProducts();

    yield put(getProductsSuccess(products));
  } catch (e) {
    yield put(getProductsError(e));
  }
}

export function* createProductSaga(action) {
  const { product } = action;
  yield put(createProductRequest());
  try {
    const {
      data: { data: newProduct },
    } = yield API.createProduct(product);
    yield put(createProductSuccess(newProduct));
  } catch (e) {
    yield put(createProductError(e));
  }
}

export function* getProductSaga(action) {
  const { id } = action;
  yield put(getProductRequest());
  try {
    yield API.getProductById(id);
    yield put(getProductSuccess(id));
  } catch (e) {
    yield put(getProductError(e));
  }
}