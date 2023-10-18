import { FC } from 'react';

import Link from 'next/link';

import IndexMainTrendingArticle from './IndexMainTrendingArticle';
import IndexOtherTrrendingArticlesList from './IndexOtherTrendingArticlesList';

const IndexTrendingArticlesList: FC = () => {
  return (
    <section>
      <h1 className='mb-8 text-4xl font-headings font-bold'>
        Trending articles
      </h1>
      <div className='flex flex-wrap gap-5percent'>
        <IndexMainTrendingArticle />
        <IndexOtherTrrendingArticlesList />
      </div>
      <div className='flex justify-center my-8'>
        <Link
          href='/trending'
          className='px-8 py-4 bg-secondary text-primary rounded hover:bg-secondary-light transition-colors duration-150'
        >
          See all trending
        </Link>
      </div>
    </section>
  );
};

export { IndexTrendingArticlesList };
