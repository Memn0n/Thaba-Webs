import React from 'react';

const Admin = () => {
  return (
    <div>
      <div className='bg-white border border-black rounded-3xl w-[300px] h-[480px] relative'>
        <h1 className='pt-2 text-center text-2xl drop-shadow-l font-semibold pb-4'>
          The Premises
        </h1>
        <ol type='i' className='mx-10'>
          <li className='text-xl pb-1 font-normal'>- Controlled Temperature</li>
          <li className='text-xl pb-1 font-normal'>- 24/7 Hot Water</li>
          <li className='text-xl pb-1 font-normal'>- Multiple sitting areas</li>
          <li className='text-xl pb-1 font-normal'>- Kitchen</li>
          <li className='text-xl pb-1 font-normal'>- Private Parking</li>
          <li className='text-xl pb-1 font-normal'>- Large Deck</li>
          <li className='text-xl pb-1 font-normal'>- Washing Machine</li>
          <li className='text-xl pb-1 font-normal'>- Iron</li>
          <li className='text-xl pb-1 font-normal'>- Security</li>
        </ol>

        <h2 className='absolute bottom-2 text-center w-full font-semibold text-2xl'>
          In A Booking.
          <p className='text-sm font-light'>---</p>
        </h2>
      </div>
    </div>
  );
};

export default Admin;
