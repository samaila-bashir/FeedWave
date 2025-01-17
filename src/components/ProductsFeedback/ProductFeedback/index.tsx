import { FC } from 'react';
import Upvotes from '../../upvotes';
import CommentsCount from '../../comments-count';

const Feedback: FC<IProductFeedback> = ({
  productsFeedback: { title, category, upvotes, description },
}) => {
  return (
    <div className="mx-auto w-[85%] rounded-lg bg-white p-8 md:w-full">
      <div className="mt-6 flex items-center justify-between">
        <Upvotes upvotes={upvotes} />
        <div className="md:w-5/6 md:pl-6">
          <h1 className="mb-3 font-bold text-indigo-ink">{title}</h1>
          <p className="font-normal text-slate-gray">{description}</p>
          <div className="mt-3 inline-block rounded-lg bg-ghost-white px-6 py-1 font-semibold text-cornflower-blue">
            {category}
          </div>
        </div>
        <CommentsCount total={3} />
      </div>
    </div>
  );
};
export default Feedback;
