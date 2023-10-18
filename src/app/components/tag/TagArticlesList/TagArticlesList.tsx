import { FC } from 'react';
import TagArticle from './TagArticle';

const TagArticlesList: FC = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <TagArticle />
        <TagArticle />
        <TagArticle />
      </ul>
    </section>
  );
};

export { TagArticlesList };
