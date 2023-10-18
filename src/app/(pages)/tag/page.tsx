import Divider from '@/app/components/common/Divider';
import Search from '../../components/common/Search';
import TagMainArticle from '@/app/components/tag/TagMainArticle';
import TagArticlesList from '@/app/components/tag/TagArticlesList';

export default function TagPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <p className='font-headings text-2xl mt-12 mb-4'>Tag</p>
      <h1 className='text-5xl font-headings font-base mb-12'>
        &quot;React&quot;
      </h1>
      <TagMainArticle />
      <Divider />
      <TagArticlesList />
    </div>
  );
}
