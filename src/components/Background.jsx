import React from 'react';

const Background = ({ children }) => {
  return (
    <div className="bg-gray-100 dark:bg-slate-800 transition-all">
      {children}
    </div>
  )
}
export default Background;