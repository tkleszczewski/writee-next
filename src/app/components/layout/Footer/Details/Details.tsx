import { FC } from 'react';

import Link from 'next/link';

const Details: FC = () => {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8 flex items-center flex-wrap sm:gap-5percent'>
      <div className='basis-full sm:basis-1/3-with-gap'>
        <h1 className='font-headings text-xl sm:text-3xl'>
          <Link href='/'>Writee</Link>
        </h1>
        <p className='font-light text-xs mt-2 sm:mt-8'>
          &copy; 2023 - TOMASZ KLESZCZEWSKI
        </p>
      </div>
      <div className='basis-full sm:basis-2/3-with-gap text-xs sm:text-base'>
        <ul>
          <li className='mb-3'>
            <Link className='hover:underline' href='#'>
              Instagram
            </Link>
          </li>
          <li className='mb-3'>
            <Link className='hover:underline' href='#'>
              Github
            </Link>
          </li>
          <li>
            <Link className='hover:underline' href='#'>
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Details };
