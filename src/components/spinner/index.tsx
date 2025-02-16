import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-500" />
    </div>
  );
};

export default Spinner;
