import Search from '@/app/components/common/Search';
import SearchResultArticlesList from '@/app/components/search-result/SearchResultArticlesList';

export default function SearchResultPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <p className='font-headings text-2xl mt-12 mb-4'>Search results for:</p>
      <h1 className='text-5xl font-headings font-base mb-12'>
        &quot;Creating&quot;
      </h1>
      <SearchResultArticlesList />
    </div>
  );
}
