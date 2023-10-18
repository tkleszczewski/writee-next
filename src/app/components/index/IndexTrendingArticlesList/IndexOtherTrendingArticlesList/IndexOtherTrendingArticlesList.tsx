import { FC } from 'react';

import IndexOtherTrendingArticle from './IndexOtherTrendingArticle';

const IndexOtherTrendingArticlesList: FC = () => {
  return (
    <div className='basis-full lg:basis-1/3-with-gap min-h-full'>
      <ul className='h-full flex flex-col justify-between gap-y-10'>
        <IndexOtherTrendingArticle />
        <IndexOtherTrendingArticle />
        <IndexOtherTrendingArticle />
      </ul>
    </div>
  );
};

export { IndexOtherTrendingArticlesList };
