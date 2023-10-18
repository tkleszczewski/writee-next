import Divider from '@/app/components/common/Divider';
import Search from '../../components/common/Search';
import CreatorMainArticle from '@/app/components/creator/CreatorMainArticle';
import CreatorArticlesList from '@/app/components/creator/CreatorArticlesList';

export default function CreatorPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8'>
      <Search />
      <p className='font-headings text-2xl mt-12 mb-4'>Creator:</p>
      <h1 className='text-5xl font-headings font-base mb-12'>
        Tomasz Kleszczewski
      </h1>
      <CreatorMainArticle />
      <Divider />
      <CreatorArticlesList />
    </div>
  );
}
