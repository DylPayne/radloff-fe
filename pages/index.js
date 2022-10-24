import Layout from '../components/layout/layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/future/image';

import { Alert } from 'flowbite-react';

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Head>
        <title>Radloff Squash Club</title>
      </Head>
      <Layout>
        {/* SECTION 1 */}
        <div className=' mx-auto flex flex-col items-center py-12 sm:py-24'>
          <div className='w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10'>
            <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-black leading-7 md:leading-10'>
              Welcome to <span className='text-radred'>Radloff Squash</span>.{' '}
              Where champions are made
            </h1>
            <p className='mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center sm:text-lg'>
              Built in 1979, our little club finds itself in the middle of the
              Radloff Park Sports grounds. Surrounded by mountains and a stone’s
              throw away from the Lourens river, we are proud to welcome squash
              players from all over the world.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <Link href='/membership'>
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-radred bg-radred transition duration-150 ease-in-out hover:text-neutral-200 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 py-2 border-2 border-radred sm:py-4 text-sm'>
                Memberships
              </button>
            </Link>
            <Link href='/contact'>
              <button className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-radred bg-transparent transition duration-150 ease-in-out hover:border-radred lg:text-xl lg:font-bold hover:bg-neutral-200 rounded border-2 text-radred border-radred px-4 sm:px-10 py-2 sm:py-4 text-sm'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className='px-4'>
          <div className='pt-5 md:pt-10'>
            <div className='container mx-auto'>
              <div className='flex flex-wrap items-center'>
                <div className='md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6'>
                  <div className='py-2 text-color'>
                    <h2 className='text-2xl lg:text-4xl font-black'>
                      The Game of Champions
                    </h2>
                    <p className='text-lg f-f-r py-4 md:py-8'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem.
                    </p>
                    <div className='flex items-center cursor-pointer pb-4 md:pb-0'>
                      <h3 className='f-f-r text-lg lg:text-2xl font-semibold underline text-radred'>
                        Lets Get Started
                      </h3>
                      <div className='pl-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z'
                            fill='#000000'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center'>
                  <Image
                    className='absolute w-full h-full inset-0 object-cover object-center rounded-md'
                    src='/court.jpg'
                    alt
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='pb-20 pt-16'>
            <div className='mx-auto'>
              <div className='flex flex-wrap flex-row-reverse items-center'>
                <div className='md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0'>
                  <div className='py-2 text-color'>
                    <h2 className='text-2xl lg:text-4xl font-black'>
                      Become the Best Version of Yourself
                    </h2>
                    <h2 className='text-lg py-8'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maxime mollitia, molestiae quas vel sint commodi
                      repudiandae consequuntur voluptatum laborum numquam
                      blanditiis harum quisquam eius sed odit fugiat iusto fuga
                      praesentium optio, eaque rerum! Provident similique
                      accusantium nemo autem.
                    </h2>
                    <div className='flex items-center cursor-pointer pb-4 md:pb-0'>
                      <h3 className='f-f-r text-lg lg:text-2xl font-semibold underline text-radred'>
                        Lets Get Started
                      </h3>
                      <div className='pl-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z'
                            fill='#000000'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center'>
                  <Image
                    className='absolute w-full h-full inset-0 object-cover object-center rounded-md'
                    src='/social.jpg'
                    alt
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className='max-w-screen-xl px-4 pb-4 mx-auto text-center lg:pb-8 lg:px-6'>
          <figure className='max-w-screen-md mx-auto'>
            <svg
              className='h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600'
              viewBox='0 0 24 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                fill='currentColor'
              />
            </svg>
            <blockquote>
              <p className='text-2xl font-medium text-gray-900 dark:text-white'>
                &quot;A social hub incorporated into a small squash club enjoyed
                by many. Well kept, clean, personable, and good coaching
                available. Definitely worth joining.&quot;
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center mt-6 space-x-3'>
              <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                  Anthony Allwood
                </div>
                <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                  Google Reviews
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        {/* SECTION 4 */}
        <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            <span className='block'>Ready to dive in?</span>
            <span className='block text-radred'>
              Become a member and hit the courts.
            </span>
          </h2>
          <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
            <div className='inline-flex rounded-md shadow'>
              <a
                href='#'
                className='text-lg inline-flex items-center justify-center rounded-md border border-transparent bg-radred px-5 py-3 text-base font-medium text-white'
              >
                Memberships
              </a>
            </div>
            <div className='ml-3 inline-flex rounded-md shadow'>
              <a
                href='#'
                className=' text-lg inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-radred'
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
