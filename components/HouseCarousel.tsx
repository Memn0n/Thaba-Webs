'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
  { imgUrl: '/images/house1.jpg', alt: 'gh1' },
  { imgUrl: '/images/house2.jpg', alt: 'gh2' },
  { imgUrl: '/images/house3.jpg', alt: 'gh3' },
];

const HouseCarousel = () => {
  return (
    <div className='hero-carousel'>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={460}
            height={450}
            className='object-contain'
            key={image.alt}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HouseCarousel;
