import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchProductsFeedback,
  fetchProductsFeedbackSuccess,
  fetchProductsFeedbackFailure,
} from '../../slices/product-feedback';
import { SAGA_ACTIONS } from '../actions';
import { supabase } from '../../../supabase-client';

interface IProductsFeedbackResponse {
  data: IProductsFeedbackData[];
}

function* fetchAllProductsFeedback(): Generator<any, void, any> {
  try {
    yield put(fetchProductsFeedback());

    const response: IProductsFeedbackResponse = yield call(() =>
      supabase.from('product_feedbacks').select('*')
    );

    yield put(fetchProductsFeedbackSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductsFeedbackFailure(error.message));
  }
}

export function* watchFetchProductsFeedback() {
  yield takeEvery(SAGA_ACTIONS.GET_FEEDBACKS, fetchAllProductsFeedback);
}
