import Image from 'next/image';
import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui';
import image1 from './image/1.webp';
import image2 from './image/2.png';
import image3 from './image/3.jpg';
import image4 from './image/4.webp';
import { cn } from '@/lib/utils';

export function Banner() {
  return (
    <Carousel className='w-full '>
      <CarouselContent>
        {[image1, image2, image3, image4].map((img, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='relative aspect-square h-[400px] w-full flex items-center justify-center p-6'>
                  <Image src={img} alt='banner' fill className={cn('object-cover ')} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
