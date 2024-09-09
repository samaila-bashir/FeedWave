import IllustrationEmpty from '../../../assets/suggestions/illustration-empty.svg';
import AddFeedbackBtn from '../../AddFeedbackBtn';

const NoFeedback = () => {
  return (
    <div className="mx-auto flex w-[85%] flex-col items-center gap-12 rounded-lg bg-white px-8 py-20 md:w-full">
      <img src={IllustrationEmpty} alt="Illustration empty" />
      <div className="flex flex-col items-center gap-4 text-center md:w-[68%]">
        <h1 className="text-lg font-bold text-indigo-ink">
          There is no feedback yet.
        </h1>
        <p className="text-base font-normal text-slate-gray">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
      </div>
      <AddFeedbackBtn />
    </div>
  );
};
export default NoFeedback;
