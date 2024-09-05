const App = () => {
  return (
    <>
      <div className="md:hidden w-full bg-orange-100 p-4">
        <h3>FeedWave</h3>
        <h5>Feedback board</h5>
      </div>
      <div className="flex flex-col items-center px-4 md:py-10 lg:flex-row lg:gap-10 lg:justify-center">
        <div className="w-[100%] md:w-[90%] lg:w-[25%] bg-gray-400">Left</div>
        <div className="w-[100%] md:w-[90%] lg:w-[60%] bg-gray-600">Right</div>
      </div>
    </>
  );
};
export default App;
