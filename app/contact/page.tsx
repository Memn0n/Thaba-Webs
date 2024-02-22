import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mx-2 sm:mx-10 mb-20'>
    <h1 className='text-4xl text-gray-400 text-center font-semibold mt-10'>Contact Us</h1>
    <p className='text-sm font-medium text-green-500 text-center mb-10'>
        Quality but Affordable Websites: Thaba Webs
    </p>

    <div className='flex flex-wrap justify-evenly gap-5 mt-20'>
        <div>
            <div className='flex gap-10 mb-8'>
            <Image
              src="/contact/phone.gif"
              alt="react"
              width={40}
              height={40}
              />
              <p className='text-xl font-medium'>+27 81 430 7404</p>
            </div>
            <div className='flex gap-10 mb-8'>
            <Image
              src="/contact/email.gif"
              alt="react"
              width={40}
              height={40}
              />
              <p className='text-xl font-medium'>thaba-webs@outlook.com</p>
            </div>
    
            <Link href="https://www.instagram.com/thaba_webs/">
            <div className='flex gap-10 mb-8'>
            
                <Image
                    src="/footer/instagram.png"
                    alt='instagram'
                    width={40}
                    height={40}
                />
            
            <p className='text-xl font-medium'>@thaba_webs</p>
            </div>
            </Link>

            <Link href="https://twitter.com/thaba_webs">
            <div className='flex gap-10 mb-8'>
            
                <Image
                    src="/footer/twitter.png"
                    alt='twitter'
                    width={40}
                    height={40}
                />
            
            <p className='text-xl font-medium'>@thaba_webs</p>
            </div>
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=61556458533021">
            <div className='flex gap-10'>
            
                <Image
                    src="/footer/facebook.png"
                    alt='facebook'
                    width={40}
                    height={40}
                />
            
            <p className='text-xl font-medium'>Thaba Webs</p>
            </div>
            </Link>
     
        </div>

        <div className='bg-gray-200 w-96 h-80 rounded-lg relative'>
            <Image
            className='animate-wiggle animate-infinite animate-duration-[3000ms] animate-delay-200'
            src="/contact/contact.png"
            alt="contact"
            fill
            />
        </div>
    </div>
    </div>
  )
}

export default page
