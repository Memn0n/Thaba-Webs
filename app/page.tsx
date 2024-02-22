import HeroCarousel from '@/components/HeroCarousel'
import Packages from '@/components/Packages'
import Tools from '@/components/Tools'
import Button from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
     <section className="px-6 md:px-20 py-10">
     <div className="flex max-xl:flex-col gap-16">
       <div className="flex flex-col justify-center">
         <p className="small-text">
          Quality but Affordable Websites: Thaba Webs
           <Image
             src="/icons/arrow-right.svg"
             alt="arrow-right"
             width={16}
             height={16}
           />
         </p>

         <h1 className="head-text">
          Get the best deal for your ideal Website TODAY!!!
         </h1>

         <p className="small-text">
         Contact Us and Select your Package 
         </p>
         <p className="mt-2">
         E-Commerce, Business, Admin, Blog, Portfolio Websites & More
         </p>
       </div>

       <HeroCarousel />
     </div>

   </section>
     <Packages />
     <Tools/>

     <div className='bg-gradient-to-r from-yellow-300  to-black pt-5'>
            <h1 className='text-3xl text-gray-100 text-center font-semibold mt-10'>Our Projects</h1>
            <p className='text-sm font-medium text-gray-100 text-center mb-10'>
                Quality but Affordable Websites: Thaba Webs
            </p>

            <div className='pb-20 flex flex-wrap gap-10 justify-center px-6 md:px-20'>
                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <Image
                    className="mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/chilinkha.png"
                    alt="chilinkha"
                    width={280}
                    height={380}
                    />
                    <h1 className='text-center font-semibold text-xl text-white mt-2'>Chilinkha Energies</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        An E-Commerce dynamic store project powered by Next.JS and PrismaDB with full checkout funtionality
                    </p>
                    
                    <Link href="https://chilinkha-energy.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>


                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <div className='w-[280px] h-[272px] mx-auto relative'>
                    <Image
                    className="mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/air.png"
                    alt="air"
                    fill={true}
                    objectFit='cover'
                    objectPosition='right'
                    />
                    </div>
                    
                    <h1 className='text-center font-semibold text-xl text-white mt-4'>AirBNBsa</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        A dynamic Business project powered by Next.JS and PrismaDB where ArBNB customers can make reservations 
                    </p>
                    
                    <Link href="https://moya-bnb.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>
                

                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <div className='w-[280px] h-[272px] mx-auto relative'>
                    <Image
                    className="w-[280px] h-[380px] mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/todo.png"
                    alt="todo"
                    fill={true}
                    objectFit='cover'
                    objectPosition='left'
                    />
                    </div>
                    
                    <h1 className='text-center font-semibold text-xl text-white mt-4'>ToDo</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        A simple todo website where users can login and set reminders for later, also a fullstack as all entries are posted in real time
                    </p>
                    
                    <Link href="https://todo-hazel-rho.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>


                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <div className='w-[280px] h-[272px] mx-auto relative'>
                    <Image
                    className="w-[280px] h-[380px] mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/amani.png"
                    alt="amani"
                    fill={true}
                    objectFit='cover'
                    />
                    </div>
                    
                    <h1 className='text-center font-semibold text-xl text-white mt-4'>ToDo</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        An NGO websites falling under the Business package. It has a Rest-API support all powered by Next.JS
                    </p>
                    
                    <Link href="https://amani-foundation.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>


                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <div className='w-[280px] h-[272px] mx-auto relative'>
                    <Image
                    className="w-[280px] h-[380px] mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/admin.png"
                    alt="admin"
                    fill={true}
                    objectFit='cover'
                    objectPosition='left'
                    />
                    </div>
                    
                    <h1 className='text-center font-semibold text-xl text-white mt-4'>Admin</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        Admin Dashboard Website, built to support E-commerce shop sites from the back-end. Powered by Next.JS & PrismaDB
                    </p>
                    
                    <Link href="https://admin-eosin-seven.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>


                <div className='bg-gray-600 border border-black rounded-3xl w-[300px] h-[480px] relative'>
                    <div className='w-[280px] h-[272px] mx-auto relative'>
                    <Image
                    className="w-[280px] h-[380px] mx-auto mt-2 rounded-t-2xl shadow-lg"
                    src="/about/d-jo.png"
                    alt="d-jo"
                    fill={true}
                    objectFit='cover'
                    objectPosition='left'
                    />
                    </div>
                    
                    <h1 className='text-center font-semibold text-xl text-white mt-4'>D-JO</h1>
                    <p className='text-gray-200 text-center mx-3 mt-2'>
                        Food Finder Website supported by a Google-Maps API with functionality to pinpoint particular food restaurants based on the chosen category 
                    </p>
                    
                    <Link href="https://d-jo.vercel.app/">
                    <Button className='absolute bottom-2 mx-3 w-[274px] rounded-xl text-gray-800 bg-white text-xl font-thin'>
                        Visit Website
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
