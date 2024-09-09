import { PlusIcon } from '@heroicons/react/20/solid';
const AddFeedbackBtn = () => {
  return (
    <button className="inline-flex w-44 items-center justify-center rounded bg-amethyst-purple px-4 py-2 font-semibold text-white hover:bg-amethyst-purple-hover">
      <PlusIcon className="mr-2 h-5 w-5" />
      Add Feedback
    </button>
  );
};
export default AddFeedbackBtn;
