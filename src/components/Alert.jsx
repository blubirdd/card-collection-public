import React from 'react';

function Alert({ onConfirm, onCancel, message }) {
  return (
    <>
      <div className="z-[60] fixed inset-0 bg-gray-950 opacity-90"></div>
      <div className="z-[70] fixed inset-0 flex items-center justify-center mb-72">
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-gray-800">
          <div className="absolute top-2 end-2">
            <button
              type="button"
              onClick={onCancel}
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Close</span>
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>

          <div className="p-4 sm:p-10 text-center overflow-y-auto">
            <span className="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
              <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </span>

            <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
              WARNING
            </h3>
            <p className="text-gray-400">
              {message}
            </p>

            <div className="mt-6 flex justify-center gap-x-4">
              <p 
              onClick={onConfirm}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-red-950 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Proceed anyway
              </p>
              <button
                type="button"
                onClick={onCancel}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alert;
