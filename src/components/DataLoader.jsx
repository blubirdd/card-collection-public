import React from 'react';

function DataLoader({ message }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
      <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-gray-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="px-3 font-bold text-sm dark:text-gray-50">{message}...</p>
    </div>
  );
}

export default DataLoader;
