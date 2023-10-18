import { FC } from 'react';

const LatestArticlesList: FC = () => {
  return (
    <section>
      <h1 className='mb-8 text-4xl font-headings font-bold'>Latest Articles</h1>
      <ul className='flex flex-wrap gap-y-5 gap-x-5percent lg:gap-x-4percent'>
        <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/4-with-gap'>
          <article>
            <a href='#' className='flex flex-col group'>
              <div>
                <div className='relative'>
                  <img
                    className='object-cover aspect-video w-full object-center'
                    src='/gray.jpg'
                  />
                  <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
                    16:9
                  </p>
                  <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
                    Read more ...
                    <i className='mr-4' data-lucide='arrow-right'></i>
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
        </li>
        <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/4-with-gap'>
          <article>
            <a href='#' className='flex flex-col group'>
              <div>
                <div className='relative'>
                  <img
                    className='object-cover aspect-video w-full object-center'
                    src='/gray.jpg'
                  />
                  <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
                    16:9
                  </p>
                  <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
                    Read more ...
                    <i className='mr-4' data-lucide='arrow-right'></i>
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
        </li>
        <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/4-with-gap'>
          <article>
            <a href='#' className='flex flex-col group'>
              <div>
                <div className='relative'>
                  <img
                    className='object-cover aspect-video w-full object-center'
                    src='/gray.jpg'
                  />
                  <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
                    16:9
                  </p>
                  <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
                    Read more ...
                    <i className='mr-4' data-lucide='arrow-right'></i>
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
        </li>
        <li className='basis-full sm:basis-1/2-with-gap lg:basis-1/4-with-gap'>
          <article>
            <a href='#' className='flex flex-col group'>
              <div>
                <div className='relative'>
                  <img
                    className='object-cover aspect-video w-full object-center'
                    src='/gray.jpg'
                  />
                  <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl z-20'>
                    16:9
                  </p>
                  <p className='pl-4 py-4 absolute bottom-0 w-full left-0 bg-secondary bg-opacity-50 text-primary fade-in hidden group-hover:flex justify-between font-extralight italic'>
                    Read more ...
                    <i className='mr-4' data-lucide='arrow-right'></i>
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
        </li>
      </ul>
      <div className='flex justify-center my-8'>
        <a
          href='./latest.html'
          className='px-8 py-4 bg-secondary text-primary rounded hover:bg-secondary-light transition-colors duration-150'
        >
          See all latest
        </a>
      </div>
    </section>
  );
};

export { LatestArticlesList };
