import React, { useState } from 'react';

function CategoryButtons({ categories, onCategoryChange, startingCategory }) {

  const [selectedCategory, setSelectedCategory] = useState(categories[startingCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };


  return (
    <div className="categoryButtons flex p-6">
      <div className="flex flex-col w-full sm:inline-flex sm:flex-row mx-auto justify-center rounded-sm gap-x-2 gap-y-2 shadow-sm">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
            `${selectedCategory === category ? 'dark:bg-gray-700 border-gray-900 bg-blue-100' : 'bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-800'}
             py-3 px-4 inline-flex items-center gap-x-2 -mt-px -ms-px rounded-xl text-sm font-medium focus:z-0 border  text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 shadow-sm dark:shadow-gray-400  hover:bg-blue-100 disabled:opacity-50 disabled:pointer-events-none`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryButtons;
