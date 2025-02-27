import { FC } from "react";
import Template from "../../layouts/Template";

const ArtistDetail: FC = () => {
  return (
    <Template>
      <div className='flex-1 bg-gradient-to-b from-primary to-black p-8 overflow-auto pb-28'>
        {/* Artist Header Section */}
        <div className='relative mb-8'>
          <img
            src='https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop'
            alt='Artist Cover'
            className='w-full h-[300px] object-cover rounded-lg'
          />
          <button className='absolute top-4 right-4 bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              viewBox='0 0 24 24'
              fill='white'
            >
              <path d='M8 5v14l11-7z' />
            </svg>
          </button>
        </div>

        {/* Artist Info */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>John</h1>
          <p className='text-gray-400'>2,223,254 monthly listeners</p>
        </div>

        {/* Top Hits Section */}
        <div className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Top Hits</h2>
          <div className='space-y-4'>
            {/* Song Item */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                  alt='Melbourne Sunset'
                  className='w-12 h-12 rounded'
                />
                <div>
                  <h3 className='font-medium'>Melbourne Sunset</h3>
                  <p className='text-sm text-gray-400'>03:14</p>
                </div>
              </div>
              <button className='text-gray-400 hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </div>

            {/* Song Item */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                  alt='Every Day'
                  className='w-12 h-12 rounded'
                />
                <div>
                  <h3 className='font-medium'>Every Day</h3>
                  <p className='text-sm text-gray-400'>04:21</p>
                </div>
              </div>
              <button className='text-gray-400 hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Featuring Section */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>Featuring</h2>
          <div className='space-y-4'>
            {/* Featured Song */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <img
                  src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                  alt='Forever'
                  className='w-12 h-12 rounded'
                />
                <div>
                  <h3 className='font-medium'>Forever (feat. Sarah)</h3>
                  <p className='text-sm text-gray-400'>02:54</p>
                </div>
              </div>
              <button className='text-gray-400 hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ArtistDetail;
