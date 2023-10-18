import CategoryArticlesList from '../../components/category/CategoryArticlesList';
import CategoryMainArticle from '../../components/category/CategoryMainArticle';
import Divider from '../../components/common/Divider';
import Search from '../../components/common/Search';

export default function CategoryPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <p className='font-headings text-2xl mt-12 mb-4'>Category</p>
      <h1 className='text-5xl font-headings font-base mb-12'>
        &quot;Engineering&quot;
      </h1>
      <CategoryMainArticle />
      <Divider />
      <CategoryArticlesList />
    </div>
  );
}
