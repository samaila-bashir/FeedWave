import { combineReducers } from '@reduxjs/toolkit';
import productsFeedback from './product-feedback';

export const rootReducer = combineReducers({
  feedbacks: productsFeedback,
});
