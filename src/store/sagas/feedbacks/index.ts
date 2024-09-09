import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchProductsFeedback,
  fetchProductsFeedbackSuccess,
  fetchProductsFeedbackFailure,
} from '../../slices/product-feedback';
import { SAGA_ACTIONS } from '../actions';

interface IProductsFeedbackResponse {
  data: IProductsFeedbackData[];
}

function* fetchAllProductsFeedback(): Generator<
  any,
  void,
  AxiosResponse<IProductsFeedbackResponse>
> {
  try {
    yield put(fetchProductsFeedback());

    const response = yield call(axios.get, '/api/products-feedback');

    yield put(fetchProductsFeedbackSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFeedbackFailure(error.message));
  }
}

export function* watchFetchProductsFeedback() {
  yield takeEvery(SAGA_ACTIONS.GET_FEEDBACKS, fetchAllProductsFeedback);
}
