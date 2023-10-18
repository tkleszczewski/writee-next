import Divider from '@/app/components/common/Divider';
import Search from '@/app/components/common/Search';
import TrendingArticlesList from '@/app/components/trending/TrendingArticlesList';
import TrendingMainArticle from '@/app/components/trending/TrendingMainArticle';

export default function CategoryPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <h1 className='text-5xl font-headings font-base mb-12'>Trending Posts</h1>
      <TrendingMainArticle />
      <Divider />
      <TrendingArticlesList />
    </div>
  );
}
