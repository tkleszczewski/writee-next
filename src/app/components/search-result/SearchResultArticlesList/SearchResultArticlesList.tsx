import { FC } from 'react';

import SearchResultArticle from './SearchResultArticle';

const SearchResultArticlesList: FC = () => {
  return (
    <section>
      <ul className='flex justify-center gap-x-5percent gap-y-5 flex-wrap w-full'>
        <SearchResultArticle />
        <SearchResultArticle />
        <SearchResultArticle />
        <SearchResultArticle />
        <SearchResultArticle />
      </ul>
    </section>
  );
};

export { SearchResultArticlesList };
