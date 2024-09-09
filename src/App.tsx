import ActionBar from './components/ActionBar';
import MainHeader from './components/MainHeader';
import MobileHeader from './components/MobileHeader';
import ProductsFeedback from './components/ProductsFeedback';

const App = () => {
  return (
    <>
      <MobileHeader />

      <div className="gap-3 md:mx-auto md:w-[90%] lg:flex lg:w-[80%] lg:justify-between lg:space-x-5">
        <MainHeader />
        <div className="space-y-8 lg:mt-12 lg:w-[75%]">
          <ActionBar />
          <ProductsFeedback />
        </div>
      </div>
    </>
  );
};
export default App;
