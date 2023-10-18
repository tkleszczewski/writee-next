'use client';

import { FC, useCallback, useState } from 'react';

import Link from 'next/link';

import clsx from 'clsx';

import { Menu } from 'lucide-react';

const MobileNav: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuButtonClick = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, []);

  return (
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
  );
};

export { MobileNav };
