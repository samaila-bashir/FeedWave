import { createSlice } from '@reduxjs/toolkit';

interface IProductFeedbackState {
  productsFeedback: IProductsFeedbackData[];
  loading: boolean;
  error: string;
}

const defaultState: IProductFeedbackState = {
  productsFeedback: [],
  loading: false,
  error: '',
};

const productFeedbackSlice = createSlice({
  name: 'productFeedback',
  initialState: { ...defaultState },
  reducers: {
    fetchProductsFeedback: (state) => {
      state.loading = true;
    },
    fetchProductsFeedbackSuccess: (state, action) => {
      state.loading = false;
      state.productsFeedback = action.payload;
    },
    fetchProductsFeedbackFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsFeedback,
  fetchProductsFeedbackSuccess,
  fetchProductsFeedbackFailure,
} = productFeedbackSlice.actions;

export default productFeedbackSlice.reducer;
