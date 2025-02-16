import { populateDatabase } from '@/populate-firebase';

const PopulateDataComponent = () => {
  const handlePopulate = async () => {
    await populateDatabase();
  };

  return (
    <div>
      <h1>Populate Firebase Data</h1>
      <button
        onClick={handlePopulate}
        className="cursor-pointer rounded border-none bg-blue-500 px-4 py-2 text-lg text-white"
      >
        Run Populate Script
      </button>
    </div>
  );
};

export default PopulateDataComponent;
