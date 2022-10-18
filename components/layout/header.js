import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import Container from './container';


const pages = [
  {name: 'ABOUT', link: '/about'},
  {name: 'GALLERY', link: '/gallery'},
  {name: 'MEMBERSHIP', link: '/membership'},
  {name: 'CLUB LADDER', link: '/ladder'},
  {name: 'BOOK COURT', link: 'https://www.ezibook.co.za/rpsc'},
  {name: 'CONTACT US', link: '/contact'},
]

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className='mb-4 md:mb-10'>
      <div className={`ease-in-out duration-300 top-0 left-0 w-[75vw] border-r-2 border-radred bg-white p-10 fixed h-full z-40 ${
        showSidebar ? 'translate-x-0 ' : '-translate-x-full'
      }`}>
        <div className='mt-10'>
          <Link href="/">
            <p className="font-light hover:underline hover:cursor-pointer text-2xl">HOME</p>
          </Link>
          {pages.map((page) => (
            <Link href={page.link} key={page.link}>
              <p className="font-light hover:underline hover:cursor-pointer text-2xl">{page.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center bg-white py-4 border-b-4 border-radred md:border-0">
        <div className="basis-1/3">
          <div className="flex items-center md:hidden">
            {showSidebar ? (
              <button
                className="flex text-4xl items-center cursor-pointer fixed left-10 top-6 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                x
              </button>
            ) : (
              <svg
                onClick={() => setShowSidebar(!showSidebar)}
                className="z-30 items-center cursor-pointer ml-4"
                // fill="#2563EB"
                viewBox="0 0 150 70"
                width="30"
                height="30"
              >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
              </svg>
            )}
          </div>
        </div>
        <div className="basis-1/3 flex justify-center items-center hover:cursor-pointer">
          <Link href="/">
            <Image src={'/logo.svg'} width={200} height={90}/>
          </Link>
        </div>
        <div className="basis-1/3"></div>
      </div>
      <div className="hidden md:flex justify-center gap-x-8 bg-radred py-1">
        {pages.map((page) => (
          <Link href={page.link} key={page.link}>
            <p className="text-white font-thin hover:underline hover:cursor-pointer">{page.name}</p>
          </Link>
        ))}
      </div>
    </header>
  )
}