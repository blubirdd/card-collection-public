import React from 'react';

const Loader = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-slate-800 bg-opacity-75 z-50">
      <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="px-3 font-bold dark:text-gray-50">{message}...</p>
    </div>
  );
};

export default Loader;
