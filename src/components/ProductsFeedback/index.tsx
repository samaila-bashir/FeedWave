import ProductFeedback from '@/components/ProductsFeedback/ProductFeedback';
import NoProductFeedback from '@/components/ProductsFeedback/NoProductFeedback';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useEffect } from 'react';
import { SAGA_ACTIONS } from '@/store/sagas/actions';
import { useAppContext } from '@/context/app-context';
import { sortFeedback } from '@/utils/funcs';
// import PopulateDataComponent from '../populate-data';

const ProductsFeedback = () => {
  const dispatch = useDispatch();
  const { sortOption } = useAppContext();

  useEffect(() => {
    dispatch({ type: SAGA_ACTIONS.GET_FEEDBACKS });
  }, []);

  const { productsFeedback } = useSelector(
    (state: RootState) => state.feedbacks
  );

  const sortedFeedback = sortFeedback(productsFeedback, sortOption);

  // return <PopulateDataComponent />;

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
