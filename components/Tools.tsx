import Image from 'next/image';
import React from 'react';
import HouseCarousel from './HouseCarousel';
import Admin from './deals/Admin';
import Portfolio from './deals/Portfolio';

const Tools = () => {
  return (
    <div className='px-6 md:px-20'>
      <h1 className='pt-10 pb-2 text-center text-4xl drop-shadow-xl'>
        The House
      </h1>
      <p className='text-sm font-medium text-gray-700 text-center mb-10'>
        COMFORT MADE SIMPLE
      </p>
      <HouseCarousel />
      <div className='flex flex-wrap my-10 gap-10 justify-center'>
        <Admin />
        <Portfolio />
      </div>
    </div>
  );
};

export default Tools;
