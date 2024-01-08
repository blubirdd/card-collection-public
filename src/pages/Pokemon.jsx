import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard.jsx';
import CategoryButtons from '../components/CategoryButtons.jsx';
import { cards as predefinedCards } from '../constants/pokemon.js';
import DataLoader from '../components/DataLoader.jsx';

function Pokemon() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPokemonCards = async () => {
    try {
      const storedData = sessionStorage.getItem('pokemonCards');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setData(parsedData.cards);
        setCategories(parsedData.categories);
      } else {
        const cardPromises = predefinedCards.map(async (predefinedCard) => {
          const url = `https://api.pokemontcg.io/v2/cards/${predefinedCard.id}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const cardData = await response.json();
          return {
            id: cardData.data.id,
            name: cardData.data.name,
            image: cardData.data.images.small,
            category: cardData.data.types[0],
          };
        });

        const resolvedCards = await Promise.all(cardPromises);
        setData(resolvedCards);

        const uniqueCategories = Array.from(new Set(resolvedCards.map(card => card.category)));
        setCategories(["All", ...uniqueCategories]);

        sessionStorage.setItem('pokemonCards', JSON.stringify({ cards: resolvedCards, categories: ["All", ...uniqueCategories] }));
      }
    } catch (error) {
      console.error('Error fetching Pokemon cards:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonCards();
  }, []);

  useEffect(() => {
    setFilteredCards([...data]);

    //st initial category to not force render all cards
    const initialCategory = "Colorless";
    setSelectedCategory(initialCategory);
    setFilteredCards(data.filter((card) => card.category === initialCategory));
  }, [data]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setFilteredCards([...data]);
    } else {
      setFilteredCards(data.filter((card) => card.category === category));
    }
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    getPokemonCards();
  };

  return (
    <>
      {loading && <DataLoader message="Fetching data" />}
      {error && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-light text-sm">Failed to fetch pokemon cards ({error}), try again later.</p>
        </div>
      )}
      {!loading && !error && (
        <>
          <CategoryButtons categories={categories} onCategoryChange={handleCategoryChange} startingCategory={1} />
          <div className="flex flex-wrap justify-center max-w-7xl gap-x-4 gap-y-14 mx-auto pb-5">
            {filteredCards.map((card) => (
              <PokemonCard key={card.id} {...card} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Pokemon;
