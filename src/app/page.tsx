import Divider from './components/common/Divider';
import Search from './components/common/Search';
import LatestArticlesList from './components/index/LatestArticlesList';
import TrendingArticlesList from './components/index/TrendingArticlesList';

export default function Home() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <TrendingArticlesList />
      <Divider />
      <LatestArticlesList />
    </div>
  );
}
