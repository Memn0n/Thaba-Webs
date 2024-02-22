import React from 'react'

const Portfolio = () => {
  return (
    <div>
    <div className='bg-white border border-black rounded-3xl w-[300px] h-[480px] relative'>
   <h1 className='pt-2 text-center text-2xl drop-shadow-l font-semibold pb-4'>Portfolio Websites</h1>
   <ol type='i' className='mx-10'>
     <li className='text-xl pb-1 font-normal'>- Responsive</li>
     <li className='text-xl pb-1 font-normal'>- Multi-Page</li>
     <li className='text-xl pb-1 font-normal'>- Admin Sign-up/Sign-in</li>
     <li className='text-xl pb-1 font-normal'>- Dynamic Content</li>
     <li className='text-xl pb-1 font-normal'>- FullStack</li>
     <li className='text-xl pb-1 font-normal'>- Free Logo</li>
     <li className='text-xl pb-1 font-normal'>- 1 Free Update</li>
   </ol>

   <h2 className='absolute bottom-2 text-center w-full font-semibold text-2xl'>
     R249.99
     <p className='text-sm font-light'>once off</p>
   </h2>
 </div>
 </div>
  )
}

export default Portfolio
