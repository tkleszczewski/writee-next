import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8 flex justify-center flex-wrap'>
      <h1 className='font-bold text-4xl mb-12 basis-full text-center'>
        Not found
      </h1>
      <Link
        className='px-8 py-4 border border-secondary rounded text-lg font-semibold'
        href='/'
      >
        Go to main <strong className='font-headings font-bold'>Writee</strong>{' '}
        page
      </Link>
    </div>
  );
}
