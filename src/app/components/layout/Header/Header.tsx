'use client';

import { FC, useState, useCallback } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { Menu } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuButtonClick = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  return (
    <header className='h-header bg-primary fixed top-0 left-0 w-full z-20 shadow-sm'>
      <div className='container xl:!max-w-7xl px-8 mx-auto flex h-full items-center justify-between relative'>
        <p className='text-xl font-headings font-bold inline text-secondary'>
          <Link href='/'>Writee</Link>
        </p>
        <nav className='block sm:hidden'>
          <button
            onClick={handleMenuButtonClick}
            className='border border-secondary rounded p-1'
          >
            <Menu />
          </button>
          <div
            className={clsx(
              'px-8 absolute top-header left-0 bg-primary w-full z-20 shadow-md',
              {
                hidden: !isMenuOpen,
              }
            )}
          >
            <ul id='mobile-navigation'>
              <li className='my-4'>
                <Link href='/category'>Design</Link>
              </li>
              <li className='my-4'>
                <Link href='/category'>Engineering</Link>
              </li>
              <li className='my-4'>
                <Link href='/category'>Opensource</Link>
              </li>
              <li className='my-4'>
                <Link href='/category'>Education</Link>
              </li>
              <li className='my-4'>
                <Link href='/category'>Community</Link>
              </li>
            </ul>
          </div>
        </nav>
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
      </div>
    </header>
  );
};

export { Header };
