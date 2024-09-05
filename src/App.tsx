import hamburger from './assets/shared/mobile/icon-hamburger.svg';
import Suggestion from './assets/suggestions/icon-suggestions.svg';
import { PlusIcon } from '@heroicons/react/20/solid';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-orange-100 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end p-5 md:hidden">
        {/* TODO: Change to background image */}
        <div>
          <h3 className="text-xl font-bold text-white">FeedWave</h3>
          <h5 className="font-medium text-gray-300">Feedback board</h5>
        </div>

        <div>
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>

      <div className="md:mx-auto md:w-[90%]">
        <div className="flex items-center justify-between bg-sub-header-bg p-5 md:rounded-md">
          <div className="flex items-center justify-between gap-12">
            <div className="hidden text-white md:flex md:items-center md:gap-3">
              <img className="h-5 w-5" src={Suggestion} alt="Suggestion icon" />
              <p className="font-bold">6 Suggesttions </p>
            </div>
            <Dropdown />
          </div>

          <button className="inline-flex w-44 items-center justify-center rounded bg-amethyst-purple px-4 py-2 font-semibold text-white hover:bg-amethyst-purple-hover">
            <PlusIcon className="mr-2 h-5 w-5" />
            Add Feedback
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
