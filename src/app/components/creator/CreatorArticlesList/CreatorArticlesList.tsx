import { FC } from 'react';
import CreatorArticle from './CreatorArticle';

const CreatorArticlesList: FC = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <CreatorArticle />
        <CreatorArticle />
      </ul>
    </section>
  );
};

export { CreatorArticlesList };
