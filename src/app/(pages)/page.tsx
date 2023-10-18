import Divider from '../components/common/Divider';
import Search from '../components/common/Search';
import IndexLatestArticlesList from '../components/index/IndexLatestArticlesList';
import IndexTrendingArticlesList from '../components/index/IndexTrendingArticlesList';

export default function IndexPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <IndexTrendingArticlesList />
      <Divider />
      <IndexLatestArticlesList />
    </div>
  );
}
