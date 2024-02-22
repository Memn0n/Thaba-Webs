'use client';

import { useState } from 'react';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs'

const Navbar = () => {

  const  [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='top-0 left-0 sticky z-50 bg-gradient-to-r from-red-300  to-yellow-300 
      shadow-xl '>
      <nav className='mx-2 sm:mx-10 flex items-center justify-between pb-2 '>
      <Link href="/">
        <Image
            src="/logo2.png"
            alt='logo'
            width={100}
            height={100}
        />
      </Link>

      <div className='hidden sm:flex h-full mt-5 gap-2 '>
        
        <Link href="/contact">
        <Button className='text-gray-300 font-bold text-sm shadow-lg'>
            Contact
        </Button>
        </Link>

        <Link href="/about">
        <Button className='text-gray-300 font-bold text-sm shadow-lg'>
            About
        </Button>
        </Link>
      </div>

      {/* mobile view */}

    <div onClick={toggleMenu} className="sm:hidden cursor-pointer ">
        <BsList className="h-10 w-10"/>        
    </div>

    </nav>

    <div className={
      menuOpen 
      ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-gradient-to-b border-r-2 border-gray-500 from-red-300  to-yellow-300 p-10 ease-in-out duration-500" 
      : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500" }>
        <div className='flex w-full items-center justify-end'>
          <div onClick={toggleMenu} className='cursor-pointer'>
          <BsX className="h-10 w-10"/>
          </div>
        </div>

        <div className='flex flex-col py-4 gap-5 w-full h-full relative'>
        
        <Link onClick={() => setMenuOpen(false)} href="/contact">
        <Button className='text-gray-300 font-bold text-sm shadow-lg'>
            Contact
        </Button>
        </Link>

        <Link onClick={() => setMenuOpen(false)} href="/about">
        <Button className='text-gray-300 font-bold text-sm shadow-lg'>
            About
        </Button>
        </Link>

        <div className="flex-col mt-2 ml-2">
            <Link href="https://www.instagram.com/thaba_webs/">
                <Image
                    src="/footer/instagram.png"
                    alt='instagram'
                    width={30}
                    height={30}
                />
            </Link>

            <Link href="https://twitter.com/thaba_webs">
                <Image
                    className='mt-4'
                    src="/footer/twitter.png"
                    alt='twitter'
                    width={30}
                    height={30}
                />
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61556458533021">
                <Image
                    className='mt-4'
                    src="/footer/facebook.png"
                    alt='facebook'
                    width={30}
                    height={30}
                />
            </Link>
            </div>

        <Link onClick={() => setMenuOpen(false)} className='absolute bottom-10 left-0' href="/">
        <Image
            src="/logo2.png"
            alt='logo'
            width={100}
            height={100}
        />
      </Link>
        </div>
    </div>

    </header>
    
  )
}

export default Navbar
