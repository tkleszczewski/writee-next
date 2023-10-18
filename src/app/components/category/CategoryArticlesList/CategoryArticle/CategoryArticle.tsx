import { FC } from 'react';

const CategoryArticle: FC = () => {
  return (
    <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/3-with-gap hover:-translate-y-2 transition-transform duration-150'>
      <article>
        <a href='#blog-post' className='block group'>
          <div className='relative'>
            <img
              className='aspect-video w-full object-cover object-center'
              src='/gray.jpg'
            />
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl'>
              16:9
            </p>
            <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
              Read more...<i className='mr-4' data-lucide='arrow-right'></i>
            </p>
          </div>
          <p className='font-semibold font-headings text-lg mt-3 group-hover:underline'>
            Creating content that attracts readers
          </p>
          <div className='flex flex-nowrap mt-2'>
            <p>September 12, 2023</p>

            <div className='h-4 w-px bg-secondary mx-3'></div>
            <p>Marketing</p>
          </div>
        </a>
      </article>
    </li>
  );
};

export { CategoryArticle };