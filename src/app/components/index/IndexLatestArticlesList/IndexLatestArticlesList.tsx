import { FC } from 'react';

import Link from 'next/link';

import IndexLatestArticle from './IndexLatestArticle';

const IndexLatestArticlesList: FC = () => {
  return (
    <section>
      <h1 className='mb-8 text-4xl font-headings font-bold'>Latest Articles</h1>
      <ul className='flex flex-wrap gap-y-5 gap-x-5percent lg:gap-x-4percent'>
        <IndexLatestArticle />
        <IndexLatestArticle />
        <IndexLatestArticle />
        <IndexLatestArticle />
      </ul>
      <div className='flex justify-center my-8'>
        <Link
          href='/latest'
          className='px-8 py-4 bg-secondary text-primary rounded hover:bg-secondary-light transition-colors duration-150'
        >
          See all latest
        </Link>
      </div>
    </section>
  );
};

export { IndexLatestArticlesList };
