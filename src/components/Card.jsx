import React from 'react';

function Card({ ...card }) {
  const isRounded = card.rounded !== undefined ? card.rounded === 'true' : true;

  return (
    <div className={`container w-[130px] h-[206px] sm:w-[141px] sm:h-[219px] perspective-800 cursor-pointer`} data-aos="fade-up" data-aos-offset="-50" data-aos-easing="ease-in-out">
      <div className={`card relative h-full bg-center bg-cover w-full bg-slate-200 dark:bg-slate-900  ${isRounded ? 'border border-gray-500' : 'border-2 border-gray-300'} dark:border-gray-300 dark:border-opacity-50 ${isRounded ? 'rounded-xl' : ''}`}>
        <div className={`front absolute w-full h-full ${isRounded ? 'rounded-xl' : ''} bg-cover bg-center`}
          style={{ backgroundImage: `url(${card.front})` }}
        ></div>
        <div className={`back flex absolute w-full h-full ${isRounded ? 'rounded-xl' : ''} bg-cover bg-center`}
          style={{ backgroundImage: `url(${card.back})` }}>
        </div>
      </div>
      <p className="text-center text-sm font-semibold py-1 pt-[8px] text-gray-600 dark:text-gray-300">{card.name}</p>
    </div>
  );
}

export default Card;
