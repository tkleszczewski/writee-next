import { FC } from 'react';
import CategoryArticle from './CategoryArticle';

const CategoryArticlesList = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <CategoryArticle />
        <CategoryArticle />
        <CategoryArticle />
        <CategoryArticle />
        <CategoryArticle />
        <CategoryArticle />
      </ul>
      <div className='flex justify-center mt-12'>
        <button className='px-8 py-4 bg-secondary text-primary rounded hover:bg-secondary-light transition-colors duration-150'>
          Show more posts from category &quot;Engineering&quot;
        </button>
      </div>
    </section>
  );
};

export { CategoryArticlesList };
