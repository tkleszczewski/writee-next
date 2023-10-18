'use client';

import { Grid } from 'react-loader-spinner';

export default function LoadingPage() {
  return (
    <div className='container mx-auto xl:!max-w-7xl px-8 flex justify-center'>
      <Grid
        height='80'
        width='80'
        color='#000'
        ariaLabel='grid-loading'
        radius='12.5'
        visible={true}
      />
    </div>
  );
}
