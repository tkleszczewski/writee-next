import { FC } from 'react';

import Subscribe from './Subscribe';
import Details from './Details';

const Footer: FC = () => {
  return (
    <footer className='h-footer border-t border-gray mt-20 text-white bg-secondary flex flex-col justify-center overflow-hidden'>
      <Subscribe />
      <Details />
    </footer>
  );
};

export { Footer };
