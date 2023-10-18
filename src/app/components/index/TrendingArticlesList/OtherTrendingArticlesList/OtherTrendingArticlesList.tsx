import { FC } from 'react';

import OtherTrendingArticle from './OtherTrendingArticle';

const OtherTrendingArticlesList: FC = () => {
  return (
    <div className='basis-full lg:basis-1/3-with-gap min-h-full'>
      <ul className='h-full flex flex-col justify-between gap-y-10'>
        <OtherTrendingArticle />
        <OtherTrendingArticle />
        <OtherTrendingArticle />
      </ul>
    </div>
  );
};

export { OtherTrendingArticlesList };
