'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
  { imgUrl: '/images/hero1.jpg', alt: 'e-commerce' },
  { imgUrl: '/images/hero2.jpg', alt: 'bnb' },
  { imgUrl: '/images/hero3.jpg', alt: 'price-check' },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
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
            height={480}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>

      <Image
        src="icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;