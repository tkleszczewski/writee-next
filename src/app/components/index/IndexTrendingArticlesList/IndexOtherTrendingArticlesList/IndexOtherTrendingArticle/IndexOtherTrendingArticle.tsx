import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const IndexOtherTrendingArticle: FC = () => {
  return (
    <li className='basis-1/3'>
      <Link href='#' className='block group'>
        <article className='flex flex-wrap justify-center gap-5percent h-full'>
          <div className='sm:basis-1/3-with-gap relative'>
            <Image
              alt='gray picture'
              height={500}
              width={500}
              className='object-cover aspect-square w-full object-center'
              src='/gray.jpg'
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
              1:1
            </p>
            <p className='pl-4 py-2 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:block font-extralight italic'>
              Read more ...
            </p>
          </div>
          <div className='basis-auto lg:basis-2/3-with-gap flex flex-col justify-center mt-2 lg:mt-0'>
            <p className='font-headings font-bold text-lg group-hover:underline'>
              Creating content that attracts readers
            </p>
            <div className='flex flex-nowrap mt-2 text-xs'>
              <p>September 12, 2023</p>
              <div className='h-4 w-px bg-secondary mx-3'></div>
              <p>Marketing</p>
            </div>
          </div>
        </article>
      </Link>
    </li>
  );
};

export { IndexOtherTrendingArticle };
