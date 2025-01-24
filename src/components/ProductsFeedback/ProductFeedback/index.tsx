import { FC } from 'react';

import Upvotes from '../../upvotes';
import CommentsCount from '../../comments-count';

const ProductFeedback: FC<IProductFeedback> = ({
  productsFeedback: { title, category, upvotes, description, totalComments },
}) => {
  return (
    <div className="mx-auto w-[85%] rounded-lg bg-white p-10 md:w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-start justify-between gap-x-5">
          <Upvotes className="hidden" upvotes={upvotes} />
          <div className="md:px-6">
            <h1 className="mb-3 text-lg font-bold text-indigo-ink">{title}</h1>
            <p className="font-normal text-slate-gray">{description}</p>
            <div className="mt-3 inline-block rounded-lg bg-ghost-white px-6 py-2 font-semibold text-cornflower-blue">
              {category}
            </div>
          </div>
        </div>
        <CommentsCount className="hidden" total={totalComments} />
      </div>
      <div className="mt-5 flex justify-between md:hidden">
        <Upvotes upvotes={upvotes} />
        <CommentsCount total={totalComments} />
      </div>
    </div>
  );
};
export default ProductFeedback;
