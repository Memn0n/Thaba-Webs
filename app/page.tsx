import FacebookMsg from '@/components/FacebookMsg';
import HeroCarousel from '@/components/HeroCarousel';
import Packages from '@/components/Packages';
import Tools from '@/components/Tools';
import ElfSightWhatsAppChat from '@/components/Whatsapp';
import Button from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <section className='px-6 md:px-20 py-10'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              COMFORT MADE SIMPLE
              <Image
                src='/icons/arrow-right.svg'
                alt='arrow-right'
                width={16}
                height={16}
              />
            </p>

            <h1 className='head-text'>
              Book your stay at Little Falls Guest House TODAY!!!
            </h1>

            <p className='small-text'>
              <Image
                src='/icons/arrow-down.svg'
                alt='arrow-right'
                width={16}
                height={16}
              />
              724 Waterval Rd, Roodepoort, 1735
            </p>
          </div>

          <HeroCarousel />
        </div>
      </section>
      <Packages />
      <Tools />
      <ElfSightWhatsAppChat />
    </div>
  );
};

export default Home;
