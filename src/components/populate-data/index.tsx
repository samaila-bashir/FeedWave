import { populateDatabase } from '@/populate-firebase';

const PopulateDataComponent = () => {
  const handlePopulate = async () => {
    await populateDatabase();
  };

  return (
    <div>
      <h1>Populate Firebase Data</h1>
      <button onClick={handlePopulate}>Run Populate Script</button>
    </div>
  );
};

export default PopulateDataComponent;
