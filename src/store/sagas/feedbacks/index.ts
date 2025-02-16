import { call, put, takeEvery } from 'redux-saga/effects';
import { db } from '@/firebase';
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  getDocs,
  QuerySnapshot,
  DocumentData,
} from 'firebase/firestore';
import {
  fetchProductsFeedback,
  fetchProductsFeedbackFailure,
  fetchProductsFeedbackSuccess,
} from '@/store/slices/product-feedback';
import { SAGA_ACTIONS } from '../actions';
import { Action } from '@reduxjs/toolkit';

const PAGE_SIZE = 5;
interface FeedbackPayload {
  lastVisible?: any;
  append: boolean;
}

export interface GetFeedbacksAction extends Action {
  type: typeof SAGA_ACTIONS.GET_FEEDBACKS;
  payload?: FeedbackPayload;
}

function* fetchAllProductsFeedback(
  action: GetFeedbacksAction
): Generator<any, void, unknown> {
  try {
    yield put(fetchProductsFeedback());

    const { lastVisible, append } = action.payload || { append: false };

    // Build the query with pagination
    let feedbackQuery;
    if (lastVisible) {
      feedbackQuery = query(
        collection(db, 'feedback'),
        orderBy('createdAt'),
        startAfter(lastVisible),
        limit(PAGE_SIZE)
      );
    } else {
      feedbackQuery = query(
        collection(db, 'feedback'),
        orderBy('createdAt'),
        limit(PAGE_SIZE)
      );
    }

    const feedbackSnapshot = (yield call(() =>
      getDocs(feedbackQuery)
    )) as QuerySnapshot<DocumentData>;
    const feedbackData: any[] = [];
    let newLastVisible = null;

    // Loop through feedback documents and load total comment count for each
    for (const docSnap of feedbackSnapshot.docs) {
      const data = docSnap.data();
      data.id = docSnap.id;

      const commentsSnapshot = (yield call(() =>
        getDocs(collection(db, 'feedback', docSnap.id, 'comments'))
      )) as QuerySnapshot<DocumentData>;
      data.totalComments = commentsSnapshot.size;

      feedbackData.push(data);
      newLastVisible = docSnap;
    }

    yield put(
      fetchProductsFeedbackSuccess({
        feedback: feedbackData,
        lastVisible: newLastVisible,
        append,
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchProductsFeedbackFailure(error.message));
    } else {
      yield put(fetchProductsFeedbackFailure('An unknown error occurred'));
    }
  }
}

export function* watchFetchProductsFeedback() {
  yield takeEvery<GetFeedbacksAction>(
    SAGA_ACTIONS.GET_FEEDBACKS,
    fetchAllProductsFeedback
  );
}
