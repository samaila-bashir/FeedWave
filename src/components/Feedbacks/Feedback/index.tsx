import { FC } from 'react';
import IconArrowUp from '../../../assets/shared/icon-arrow-up.svg';
import IconComments from '../../../assets/shared/icon-comments.svg';

const Feedback: FC<IFeedback> = ({
  data: { title, category, upvotes, description },
}) => {
  return (
    <div className="mx-auto w-[85%] rounded-lg bg-white p-8 md:w-full">
      <h1 className="mb-3 font-bold text-indigo-ink">{title}</h1>
      <p className="font-normal text-slate-gray">{description}</p>
      <div className="mt-3 inline-block rounded-lg bg-ghost-white px-6 py-1 font-semibold text-cornflower-blue">
        {category}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3 rounded-lg bg-ghost-white px-4 py-2">
          <img
            src={IconArrowUp}
            alt="Icon arrow up"
            className="h-2 w-3 font-light"
          />
          <p className="font-bold text-indigo-ink">{upvotes}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={IconComments} alt="Icon arrow up" className="h-5 w-5" />
          <p className="font-bold text-indigo-ink">2</p>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
