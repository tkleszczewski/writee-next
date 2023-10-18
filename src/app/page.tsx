import Search from './components/common/Search';
import MainTrendingArticle from './components/index/MainTrendingArticle';
import OtherTrrendingArticlesList from './components/index/OtherTrendingArticlesList';

export default function Home() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <section>
        <h1 className='mb-8 text-4xl font-headings font-bold'>
          Trending articles
        </h1>
        <div className='flex flex-wrap gap-5percent'>
          <MainTrendingArticle />
          <OtherTrrendingArticlesList />
        </div>
      </section>
    </div>
  );
}
