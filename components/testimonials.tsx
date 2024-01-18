'use client';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import TestimonialCard from '@/components/testimonial-card';
import { testimonialsArr } from '@/lib/data';

export default function Testimonials() {
  const plugin = React.useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {testimonialsArr.map((testimonial, index) => (
          <CarouselItem key={index}>
            <TestimonialCard
              image={testimonial.image}
              name={testimonial.name}
              alt={testimonial.alt}
              testimonial={testimonial.testimonial}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
