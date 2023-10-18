import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const CreatorArticle: FC = () => {
  return (
    <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/3-with-gap hover:-translate-y-2 transition-transform duration-150'>
      <article>
        <Link href='#blog-post' className='block group'>
          <div className='relative'>
            <Image
              height={500}
              width={500}
              alt='gray picture'
              className='aspect-video w-full object-cover object-center'
              src='/gray.jpg'
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl'>
              16:9
            </p>
            <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
              Read more...
              <ArrowRight className='mr-4' />
            </p>
          </div>
          <p className='font-semibold font-headings text-lg mt-3 group-hover:underline'>
            Creating content that attracts readers
          </p>
          <div className='flex flex-nowrap mt-2'>
            <p>September 12, 2023</p>
            <div className='h-4 w-px bg-secondary mx-3'></div>
            <p>Marketing</p>
          </div>
        </Link>
      </article>
    </li>
  );
};

export { CreatorArticle };
