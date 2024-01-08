import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import CategoryButtons from '../components/CategoryButtons.jsx';
import { otherCards } from '../constants/other.js';

function Other() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setFilteredCards([...otherCards]);
  }, []);

  const startOnCategory = (category) => {
    setSelectedCategory(category);
    setFilteredCards(otherCards.filter((card) => card.category === category));
  }

  const getAvailableCategories = () => {
    const uniqueCategories = [...new Set(otherCards.map((card) => card.category))];
    return ["All", ...uniqueCategories];
  };

  const categories = getAvailableCategories();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredCards([...otherCards]);
    } else {
      setFilteredCards(otherCards.filter((card) => card.category === category));
    }
  };

  return (
    <>
      <CategoryButtons categories={categories} onCategoryChange={handleCategoryChange} startingCategory={0} />
      <div className="flex flex-wrap justify-center max-w-7xl gap-x-4 gap-y-14 mx-auto pb-5">
        {filteredCards
          .sort((a, b) => b.id - a.id) 
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </div>
    </>
  );
}

export default Other;
