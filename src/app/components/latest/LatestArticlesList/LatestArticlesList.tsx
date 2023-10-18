import { FC } from 'react';

import LatestArticle from './LatestArticle';

const LatestArticlesList: FC = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <LatestArticle />
        <LatestArticle />
        <LatestArticle />
        <LatestArticle />
        <LatestArticle />
      </ul>
      <div className='flex justify-center mt-12'>
        <button className='px-8 py-4 bg-secondary text-primary rounded hover:bg-secondary-light transition-colors duration-150'>
          Show more latest posts
        </button>
      </div>
    </section>
  );
};

export { LatestArticlesList };
