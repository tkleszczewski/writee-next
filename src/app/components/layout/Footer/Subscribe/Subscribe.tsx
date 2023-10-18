import { FC } from 'react';

const Subscribe: FC = () => {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8 pt-4'>
      <section>
        <div className='px-4 flex flex-col items-center lg:flex-row gap-5percent border border-gray rounded'>
          <div className='basis-3/5 lg:pl-8 py-12 flex flex-col justify-center'>
            <p className='text-2xl mb-4 font-headings'>
              Subscribe to the <span className='font-bold'>Writee</span>{' '}
              insiders
            </p>
            <p className='text-lg'>
              Discover tips, courses, and best practives for developers
            </p>
          </div>
          <div className='basis-2/5 w-full flex flex-col justify-center lg:pr-8 pb-4 lg:pb-0'>
            <div className='relative flex justify-center'>
              <input
                className='border-2 border-gray w-full pl-4 pr-2 py-2 focus:outline-gray-dark rounded text-secondary'
                type='text'
                placeholder='enter your email'
              />
              <button className='absolute bottom-0 right-0 h-full text-primary px-3 bg-secondary-light translate-x-1 rounded'>
                Subscribe
              </button>
            </div>
            <label
              htmlFor='agreements'
              className='flex justify-center items-center mt-2'
            >
              <input className='mr-4' id='agreements' type='checkbox' />
              <span className='translate-y-[2px]'>
                I hereby agree to the privacy policy
              </span>
            </label>
          </div>
        </div>
      </section>
      <div className='border-b border-gray my-8'></div>
    </div>
  );
};

export { Subscribe };
