import Suggestion from '../../assets/suggestions/icon-suggestions.svg';
import Dropdown from '../../components/Dropdown';
import AddFeedbackBtn from '../AddFeedbackBtn';

const ActionBar = () => {
  return (
    <div className="flex items-center justify-between bg-sub-header-bg p-5 md:rounded-md">
      <div className="flex items-center justify-between gap-12">
        <div className="hidden text-white md:flex md:items-center md:gap-3">
          <img className="h-5 w-5" src={Suggestion} alt="Suggestion icon" />
          <p className="font-bold">6 Suggesttions </p>
        </div>
        <Dropdown />
      </div>

      <AddFeedbackBtn />
    </div>
  );
};
export default ActionBar;
