import React from 'react'
import tcgBack from '/src/assets/other/p00b-min.jpg'

function PokemonCard({ ...card }) {

  return (
    <div className="container w-[162px] h-[225px] sm:w-[180px] sm:h-[250px] perspective-800 cursor-pointer" data-aos="fade-up">
      <div className="card relative h-full w-full rounded-xl bg-slate-200 dark:bg-slate-900 border border-gray-500 dark:border-gray-300 dark:border-opacity-50 bg-cover">
        <div className="front absolute w-full h-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        ></div>
        <div className="back flex absolute w-full h-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${tcgBack})` }}>
        </div>  
      </div>
      <p className="text-center text-sm font-semibold py-1 pt-[8px] text-gray-600 dark:text-gray-300">{card.name}</p>
    </div>
  )
}

export default PokemonCard