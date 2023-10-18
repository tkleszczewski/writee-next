import { FC } from 'react';

import { Menu } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className='h-header bg-primary fixed top-0 left-0 w-full z-20 shadow-sm'>
      <div className='container xl:!max-w-7xl px-8 mx-auto flex h-full items-center justify-between relative'>
        <p className='text-xl font-headings font-bold inline text-secondary'>
          <a href='./index.html'>Writee</a>
        </p>
        <nav className='block sm:hidden'>
          <button
            id='menu-button'
            className='border border-secondary rounded p-1'
          >
            <Menu />
          </button>
          <div
            id='navigation-container'
            className='px-8 hidden absolute top-header left-0 bg-primary w-full z-20 shadow-md'
          >
            <ul id='mobile-navigation'>
              <li className='my-4'>
                <a href='category.html'>Design</a>
              </li>
              <li className='my-4'>
                <a href='category.html'>Engineering</a>
              </li>
              <li className='my-4'>
                <a href='category.html'>Opensource</a>
              </li>
              <li className='my-4'>
                <a href='category.html'>Education</a>
              </li>
              <li className='my-4'>
                <a href='category.html'>Community</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className='h-full hidden sm:block'>
          <div className='flex flex-col items-center justify-center h-full'>
            <p className='font-extralight text-xs font-headings'>Categories</p>
            <ul className='flex items-center font-semibold'>
              <li className='ml-6'>
                <a className='relative inline-block group' href='category.html'>
                  Design
                  <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
                </a>
              </li>
              <li className='ml-6'>
                <a className='relative inline-block group' href='category.html'>
                  Engineering
                  <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
                </a>
              </li>
              <li className='ml-6'>
                <a className='relative inline-block group' href='category.html'>
                  Opensource
                  <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
                </a>
              </li>
              <li className='ml-6'>
                <a className='relative inline-block group' href='category.html'>
                  Education
                  <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
                </a>
              </li>
              <li className='ml-6'>
                <a className='relative inline-block group' href='category.html'>
                  Community
                  <span className='slide-in hidden absolute left-0 bottom-1 bg-secondary w-full h-px group-hover:block'></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { Header };
