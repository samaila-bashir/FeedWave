import ProductFeedback from './ProductFeedback';
import NoProductFeedback from './NoProductFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { SAGA_ACTIONS } from '../../store/sagas/actions';
import { useAppContext } from '../../context/app-context';

const ProductsFeedback = () => {
  const dispatch = useDispatch();
  const { sortOption } = useAppContext();

  useEffect(() => {
    dispatch({ type: SAGA_ACTIONS.GET_FEEDBACKS });
  }, []);

  const { productsFeedback } = useSelector(
    (state: RootState) => state.feedbacks
  );

  const sortedFeedback = [...(productsFeedback || [])].sort((a, b) => {
    switch (sortOption) {
      case 'Most Upvotes':
        return b.upvotes - a.upvotes;
      case 'Least Upvotes':
        return a.upvotes - b.upvotes;
      case 'Most Comments':
        return b.totalComments - a.totalComments;
      case 'Least Comments':
        return a.totalComments - b.totalComments;
      default:
        return 0;
    }
  });

  return (
    <>
      {sortedFeedback && sortedFeedback.length > 0 ? (
        sortedFeedback.map((feedback: IProductsFeedbackData) => (
          <ProductFeedback key={feedback.id} productsFeedback={feedback} />
        ))
      ) : (
        <NoProductFeedback />
      )}
    </>
  );
};
export default ProductsFeedback;
