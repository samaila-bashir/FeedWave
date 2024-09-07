import ActionBar from './components/ActionBar';
import MainHeader from './components/MainHeader';

import MobileHeader from './components/MobileHeader';

const App = () => {
  return (
    <>
      <MobileHeader />

      <div className="gap-3 md:mx-auto md:w-[90%] lg:flex lg:w-[80%] lg:justify-between">
        <MainHeader />
        <div className="lg:mt-12 lg:w-[75%]">
          <ActionBar />
        </div>
      </div>
    </>
  );
};
export default App;
