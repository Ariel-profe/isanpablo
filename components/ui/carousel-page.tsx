"use client";

import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselImage {
    id:number;
    img:string;
};

export const CarouselPage = ({images}: {images: CarouselImage[]} ) => {

    const plugin = useRef(
        Autoplay({ delay: 8000, stopOnInteraction: true })
      )
      
  return (
    <Carousel
    plugins={[plugin.current]}
    className="w-full"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    opts={{loop: true}}
  >
    <CarouselContent>
      {images.map(({id, img}) => (
        <CarouselItem key={id}>
          <img src={img} className="w-full max-h-[450px]" />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  )
}
