import { call, put, takeEvery } from 'redux-saga/effects';
import { supabase } from '../../../supabase-client';
import {
  fetchProductsFeedback,
  fetchProductsFeedbackFailure,
  fetchProductsFeedbackSuccess,
} from '../../slices/product-feedback';
import { SAGA_ACTIONS } from '../actions';

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
