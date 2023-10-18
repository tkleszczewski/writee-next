import { FC } from 'react';

import Link from 'next/link';

const DesktopNav: FC = () => {
  return (
    <nav className='h-full hidden sm:block'>
      <div className='flex flex-col items-center justify-center h-full'>
        <p className='font-extralight text-xs font-headings'>Categories</p>
        <ul className='flex items-center font-semibold'>
          <li className='ml-6'>
            <Link className='relative inline-block group' href='/category'>
              Design
              <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
            </Link>
          </li>
          <li className='ml-6'>
            <Link className='relative inline-block group' href='/category'>
              Engineering
              <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
            </Link>
          </li>
          <li className='ml-6'>
            <Link className='relative inline-block group' href='/category'>
              Opensource
              <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
            </Link>
          </li>
          <li className='ml-6'>
            <Link className='relative inline-block group' href='/category'>
              Education
              <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
            </Link>
          </li>
          <li className='ml-6'>
            <Link className='relative inline-block group' href='/category'>
              Community
              <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { DesktopNav };
