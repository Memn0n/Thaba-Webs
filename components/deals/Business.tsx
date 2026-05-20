import React from 'react';

const Business = () => {
  return (
    <div>
      <div className='bg-white border border-black rounded-3xl w-[300px] h-[480px] relative'>
        <h1 className='pt-2 text-center text-2xl drop-shadow-l font-semibold pb-4'>
          Room 2
        </h1>
        <ol type='i' className='mx-10'>
          <li className='text-xl pb-1 font-normal'>- Double Bed</li>
          <li className='text-xl pb-1 font-normal'>- 3/4 Bathroom</li>
          <li className='text-xl pb-1 font-normal'>- Linen</li>
          <li className='text-xl pb-1 font-normal'>- Wardrobe or Closet</li>
          <li className='text-xl pb-1 font-normal'>- Towels</li>
          <li className='text-xl pb-1 font-normal'>- Shampoo & Soap</li>
          <li className='text-xl pb-1 font-normal'>- Garden View</li>
        </ol>

        <h2 className='absolute bottom-2 text-center w-full font-semibold text-2xl'>
          R599.99
          <p className='text-sm font-light'>A Booking[/~14 hours]</p>
        </h2>
      </div>
    </div>
  );
};

export default Business;
