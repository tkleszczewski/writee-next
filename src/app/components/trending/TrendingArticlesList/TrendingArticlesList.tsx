import { FC } from 'react';

import TrendingArticle from './TrendingArticle';

const TrendingArticlesList: FC = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <TrendingArticle />
        <TrendingArticle />
      </ul>
    </section>
  );
};

export { TrendingArticlesList };
