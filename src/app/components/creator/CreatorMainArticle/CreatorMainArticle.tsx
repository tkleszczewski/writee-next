import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CreatorMainArticle: FC = () => {
  return (
    <section>
      <article>
        <Link href='#' className='flex flex-wrap gap-5percent group'>
          <div className='mt-4 md:mt-0 basis-full md:basis-1/3-with-gap flex flex-col items-start justify-end md:items-end order-2 md:order-1'>
            <p className='font-headings font-bold text-xl sm:text-3xl group-hover:underline text-end'>
              Creating content that attracts readers
            </p>
            <div className='flex flex-nowrap mt-2'>
              <p>September 12, 2023</p>
              <div className='h-4 w-px bg-secondary mx-3'></div>
              <p>Marketing</p>
            </div>
          </div>
          <div className='basis-full md:basis-2/3-with-gap relative order-1 md:order-2'>
            <Image
              width={500}
              height={500}
              alt='gray picture'
              className='object-cover aspect-video w-full object-center'
              src='/gray.jpg'
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
              16:9
            </p>
            <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
              Read more ...
              <ArrowRight className='mr-4' />
            </p>
          </div>
        </Link>
      </article>
    </section>
  );
};

export { CreatorMainArticle };
