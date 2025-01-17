const LoadingFallback = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFFFF] p-4 text-center">
      <h1 className="animate-pulse text-2xl font-bold text-[#647196]">
        Loading...
      </h1>
    </div>
  );
};

export default LoadingFallback;
