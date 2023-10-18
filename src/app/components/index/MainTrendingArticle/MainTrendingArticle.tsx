import { FC } from 'react';

const MainTrendingArticle: FC = () => {
  return (
    <article className='basis-full lg:basis-2/3-with-gap mb-8 lg:mb-0'>
      <a href='#' className='flex flex-col group'>
        <div>
          <div className='relative'>
            <img
              className='object-cover aspect-video w-full object-center'
              src='/src/img/gray.jpg'
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
              16:9
            </p>
            <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
              Read more ...<i className='mr-4' data-lucide='arrow-right'></i>
            </p>
          </div>
          <div className='mt-4'>
            <p className='font-headings font-bold text-2xl group-hover:underline'>
              Creating content that attracts readers
            </p>
            <div className='flex flex-nowrap mt-2'>
              <p>September 12, 2023</p>
              <div className='h-4 w-px bg-secondary mx-3'></div>
              <p>Marketing</p>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export { MainTrendingArticle };
