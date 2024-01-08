import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import CategoryButtons from '../components/CategoryButtons.jsx';
import { opCards } from '../constants/op.js';

function Onepiece() {

  const categories = [
    "All",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setFilteredCards([...opCards]);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredCards([...opCards]);
    } else {
      setFilteredCards(opCards.filter((card) => card.category === category));
    }
  };

  return (
    <>
      <CategoryButtons categories={categories} onCategoryChange={handleCategoryChange} startingCategory={0} />
      <div className="flex flex-wrap justify-center max-w-7xl gap-x-4 gap-y-14 mx-auto pb-5">
        {filteredCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </div>
    </>
  );
}

export default Onepiece;
