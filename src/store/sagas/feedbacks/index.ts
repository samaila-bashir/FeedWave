import { call, put, takeEvery } from 'redux-saga/effects';
import { db } from '../../../firebase';
import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';
import {
  fetchProductsFeedback,
  fetchProductsFeedbackFailure,
  fetchProductsFeedbackSuccess,
} from '../../slices/product-feedback';
import { SAGA_ACTIONS } from '../actions';

function* fetchAllProductsFeedback(): Generator<any, void, unknown> {
  try {
    yield put(fetchProductsFeedback());

    const feedbackSnapshot = (yield call(() =>
      getDocs(collection(db, 'feedback'))
    )) as QuerySnapshot<DocumentData>;

    const feedbackData: any[] = [];

    for (const docSnap of feedbackSnapshot.docs) {
      const data = docSnap.data();
      data.id = docSnap.id;

      const commentsSnapshot = (yield call(() =>
        getDocs(collection(db, 'feedback', docSnap.id, 'comments'))
      )) as QuerySnapshot<DocumentData>;

      data.totalComments = commentsSnapshot.size;

      feedbackData.push(data);
    }
    yield put(fetchProductsFeedbackSuccess(feedbackData));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchProductsFeedbackFailure(error.message));
    } else {
      yield put(fetchProductsFeedbackFailure('An unknown error occurred'));
    }
  }
}

export function* watchFetchProductsFeedback() {
  yield takeEvery(SAGA_ACTIONS.GET_FEEDBACKS, fetchAllProductsFeedback);
}
