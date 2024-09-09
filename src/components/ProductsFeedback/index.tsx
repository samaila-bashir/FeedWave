import ProductFeedback from './ProductFeedback';
import NoProductFeedback from './NoProductFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { SAGA_ACTIONS } from '../../store/sagas/actions';

const demoData: IProductsFeedbackData[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
  },
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
  },
];

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
      {productsFeedback.length > 0 ? (
        productsFeedback.map((feedback: IProductsFeedbackData) => (
          <ProductFeedback productsFeedback={feedback} />
        ))
      ) : (
        <NoProductFeedback />
      )}
    </>
  );
};
export default ProductsFeedback;
