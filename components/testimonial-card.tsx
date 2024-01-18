import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { noto_serif } from '@/lib/fonts';
import { cn } from '@/lib/utils';

type CardProps = {
  image: StaticImageData;
  alt: string;
  testimonial: string;
  name: string;
};

const TestimonialCard: React.FC<CardProps> = ({
  image,
  alt,
  testimonial,
  name,
}) => {
  return (
    <div className="relative h-screen p-4">
      <Image
        src={image}
        alt={alt}
        width={720}
        height={779}
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute bottom-0 left-0 z-20 p-8 text-right text-white">
        <div className="text-base">{testimonial}</div>
        <div className={cn(noto_serif.className, 'text-xl mt-2')}>{name}</div>
      </div>
    </div>
  );
};
export default TestimonialCard;
