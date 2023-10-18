import Divider from '@/app/components/common/Divider';
import Search from '@/app/components/common/Search';
import LatestArticlesList from '@/app/components/latest/LatestArticlesList';
import LatestMainArticle from '@/app/components/latest/LatestMainArticle';

export default function LatestPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <h1 className='text-5xl font-headings font-base mb-12'>Latest Posts</h1>
      <LatestMainArticle />
      <Divider />
      <LatestArticlesList />
    </div>
  );
}
