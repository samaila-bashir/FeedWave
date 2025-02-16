import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { SAGA_ACTIONS } from '@/store/sagas/actions';
import ProductFeedback from '@/components/ProductsFeedback/ProductFeedback';
import NoProductFeedback from '@/components/ProductsFeedback/NoProductFeedback';
import { sortFeedback } from '@/utils/funcs';
import { useAppContext } from '@/context/app-context';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import Spinner from '../spinner';

// import PopulateDataComponent from '../populate-data';

const ProductsFeedback: React.FC = () => {
  const dispatch = useDispatch();
  const { sortOption } = useAppContext();
  const { productsFeedback, lastVisible, loading } = useSelector(
    (state: RootState) => state.feedbacks
  );

  useEffect(() => {
    dispatch({ type: SAGA_ACTIONS.GET_FEEDBACKS, payload: { append: false } });
  }, [dispatch]);

  const onLoadMore = (lastVisible: any) => {
    dispatch({
      type: SAGA_ACTIONS.GET_FEEDBACKS,
      payload: { lastVisible, append: true },
    });
  };

  const { lastElementRef } = useInfiniteScroll({
    loading,
    lastVisible,
    onLoadMore,
  });

  const sortedFeedback = sortFeedback(productsFeedback, sortOption);

  // Uncomment the line below to see the PopulateDataComponent in action
  // This component will be used to populate the database with dummy data
  // return <PopulateDataComponent />;

  return (
    <>
      {sortedFeedback && sortedFeedback.length > 0 ? (
        sortedFeedback.map((feedback: IProductsFeedbackData, index: number) => {
          if (index === sortedFeedback.length - 1) {
            return (
              <div ref={lastElementRef} key={feedback.id}>
                <ProductFeedback productsFeedback={feedback} />
              </div>
            );
          } else {
            return (
              <ProductFeedback key={feedback.id} productsFeedback={feedback} />
            );
          }
        })
      ) : (
        <NoProductFeedback />
      )}
      {loading && (
        <div style={{ marginTop: '1rem' }}>
          <Spinner />
        </div>
      )}
    </>
  );
};

export default ProductsFeedback;
