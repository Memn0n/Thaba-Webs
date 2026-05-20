import React from 'react';
import Blog from './deals/Blog';
import Business from './deals/Business';
import Ecommerce from './deals/Ecommerce';

const Packages = () => {
  return (
    <div className='bg-gradient-to-r from-green-300  to-black  pb-20 border-t border-gray-200 px-6 md:px-20'>
      <h1 className='pt-20 pb-2 text-center text-4xl drop-shadow-xl text-white'>
        Rooms
      </h1>
      <p className='text-sm font-medium text-gray-200 text-center mb-10'>
        COMFORT MADE SIMPLE
      </p>

      <div className='flex flex-wrap gap-10 justify-center'>
        <Blog />
        <Business />
        <Ecommerce />
      </div>
    </div>
  );
};

export default Packages;
