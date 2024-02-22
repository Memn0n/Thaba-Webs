import { FaFacebook } from "react-icons/fa6";


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bottom-0 left-0 bg-yellow-100 pt-5">
      <div className="mx-5 sm:mx-10 sm:flex sm:flex-wrap gap-3 w-full justify-evenly">
        <div className="mb-4 sm:mb-0">
        <Link href="/">
        <Image
            src="/logo2.png"
            alt='logo'
            width={100}
            height={100}
        />
      </Link>
        </div>
        <div className="mb-4 sm:mb-0">
            <h1 className="text-lg font-bold">
                <Link href="/about">
                    About
                </Link>
            </h1>

            <Link href="/about">
            <p>About Us</p>
            </Link>
            <Link href="/about">
            <p>Our Projects</p>
            </Link>
            <Link href="/contact">
            <p>Contact Us</p>
            </Link>
            
        </div>
        
   
        <div>
            <h1 className="text-lg font-bold">
                <Link href="/contact">
                    Contact Us
                </Link>
            </h1>

            <p>+27 81 430 7404</p>
            <p>thaba-webs@outlook.com</p>
            <div className="flex gap-5 mt-2">
            <Link href="https://www.instagram.com/thaba_webs/">
                <Image
                    src="/footer/instagram.png"
                    alt='instagram'
                    width={25}
                    height={25}
                />
            </Link>

            <Link href="https://twitter.com/thaba_webs">
                <Image
                    src="/footer/twitter.png"
                    alt='twitter'
                    width={25}
                    height={25}
                />
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61556458533021">
                <Image
                    src="/footer/facebook.png"
                    alt='facebook'
                    width={25}
                    height={25}
                />
            </Link>
            </div>
        </div>
     
      </div>

      <p className="text-center mt-10 pb-5">© 2024 Thaba Webs</p>
    </div>
  )
}

export default Footer
