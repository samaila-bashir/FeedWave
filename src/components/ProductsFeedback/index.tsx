import ProductFeedback from './ProductFeedback';
import NoProductFeedback from './NoProductFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { SAGA_ACTIONS } from '../../store/sagas/actions';

const ProductsFeedback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SAGA_ACTIONS.GET_FEEDBACKS });
  }, []);

  const { productsFeedback } = useSelector(
    (state: RootState) => state.feedbacks
  );

  return (
    <>
      {productsFeedback && productsFeedback.length > 0 ? (
        productsFeedback.map((feedback: IProductsFeedbackData) => (
          <ProductFeedback key={feedback.id} productsFeedback={feedback} />
        ))
      ) : (
        <NoProductFeedback />
      )}
    </>
  );
};
export default ProductsFeedback;
