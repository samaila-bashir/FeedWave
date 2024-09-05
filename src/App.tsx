import hamburger from './assets/shared/mobile/icon-hamburger.svg';
import { Button } from 'flowbite-react';

const App = () => {
  return (
    <>
      <div className="flex justify-between items-center md:hidden w-full bg-orange-100 p-5 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
        <div>
          <h3 className="text-xl text-white font-bold">FeedWave</h3>
          <h5 className="font-medium text-gray-300">Feedback board</h5>
        </div>

        <div>
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>

      <div className="flex justify-between items-center p-5 bg-sub-header-bg">
        <div className="flex items-center justify-between gap-12">
          <div className="hidden md:block">
            <span>icon</span>
            <p>6 Suggesttions </p>
          </div>

          <div className="flex justify-between items-center gap-2">
            <p className="text-[#F2F4FE]">Sort by : </p>
            <div className="text-white">Upvotes Dropdown</div>
          </div>
        </div>

        <Button className="bg-amethyst-purple hover:bg-amethyst-purple-hover">
          {/* TODO: Fix button hover */}+ Add Feedback
        </Button>
      </div>

      <div className="flex flex-col items-center px-4 md:py-10 lg:flex-row lg:gap-10 lg:justify-center">
        <div className="w-[100%] md:w-[90%] lg:w-[25%] bg-gray-400">Left</div>
        <div className="w-[100%] md:w-[90%] lg:w-[60%] bg-gray-600">Right</div>
      </div>
    </>
  );
};
export default App;
