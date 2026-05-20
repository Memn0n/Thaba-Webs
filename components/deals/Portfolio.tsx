import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className='bg-white border border-black rounded-3xl w-[300px] h-[480px] relative'>
        <h1 className='pt-2 text-center text-2xl drop-shadow-l font-semibold pb-4'>
          The Area
        </h1>
        <ol type='i' className='mx-10'>
          <li className='text-xl pb-1 font-normal'>- Little Falls Suburb</li>
          <li className='text-xl pb-1 font-normal'>
            - Clearwater Mall in ~4KM
          </li>
          <li className='text-xl pb-1 font-normal'>- Kwena Square in ~200M</li>
          <li className='text-xl pb-1 font-normal'>
            - Fast Food center in ~200M
          </li>
          <li className='text-xl pb-1 font-normal'>- Pharmacy in ~50M</li>
          <li className='text-xl pb-1 font-normal'>- Beauty Salons in ~50M</li>
          <li className='text-xl pb-1 font-normal'>
            - Bar & Liquor store in ~50M
          </li>
        </ol>

        <h2 className='absolute bottom-2 text-center w-full font-semibold text-2xl'>
          ---
          <p className='text-sm font-light'>---</p>
        </h2>
      </div>
    </div>
  );
};

export default Portfolio;
