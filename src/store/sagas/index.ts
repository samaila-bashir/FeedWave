import { all, fork } from 'redux-saga/effects';
import { watchFetchProductsFeedback } from './feedbacks';

export default function* rootSaga(): Generator {
  yield all([fork(watchFetchProductsFeedback)]);
}
