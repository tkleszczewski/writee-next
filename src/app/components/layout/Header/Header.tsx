'use client';

import { FC } from 'react';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import Logo from './Logo';

const Header: FC = () => {
  return (
    <header className='h-header bg-primary fixed top-0 left-0 w-full z-20 shadow-sm'>
      <div className='container xl:!max-w-7xl px-8 mx-auto flex h-full items-center justify-between relative'>
        <Logo />
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
};

export { Header };
