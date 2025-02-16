import { createSlice } from '@reduxjs/toolkit';
interface IProductFeedbackState {
  productsFeedback: IProductsFeedbackData[];
  loading: boolean;
  error: string;
  lastVisible: any;
}

const defaultState: IProductFeedbackState = {
  productsFeedback: [],
  loading: false,
  error: '',
  lastVisible: null,
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
      const { feedback, lastVisible, append } = action.payload;
      if (append) {
        state.productsFeedback = [...state.productsFeedback, ...feedback];
      } else {
        state.productsFeedback = feedback;
      }
      state.lastVisible = lastVisible;
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
