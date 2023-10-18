import { FC } from 'react';

import Link from 'next/link';

const Logo: FC = () => {
  return (
    <p className='text-xl font-headings font-bold inline text-secondary'>
      <Link href='/'>Writee</Link>
    </p>
  );
};

export { Logo };
