import React from 'react'
import Blog from './deals/Blog'
import Business from './deals/Business'
import Admin from './deals/Admin'
import Portfolio from './deals/Portfolio'
import Ecommerce from './deals/Ecommerce'

const Packages = () => {
  return (
    <div className='bg-gradient-to-r from-red-300  to-black  pb-20 border-t border-gray-200 px-6 md:px-20'>
      <h1 className='pt-20 pb-2 text-center text-4xl drop-shadow-xl text-white'>
            Our Packages
      </h1>
      <p className='text-sm font-medium text-gray-200 text-center mb-10'>Quality but Affordable Websites: Thaba Webs</p>

      <div className='flex flex-wrap gap-10 justify-center'>
      <Blog/>
      <Business/>
      <Ecommerce/>
      <Portfolio/>
      <Admin/>
      </div>
      </div>
  )
}

export default Packages
