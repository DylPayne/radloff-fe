import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-radred border-t-2 mt-8">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Radloff Squash Club
          </h3>
          <div className="flex flex-col gap-4 lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <Link href='https://www.instagram.com'>
              <p className='underline cursor-pointer'>Instagram</p>
            </Link>
            <Link href='https://www.facebook.com'>
              <p className='underline cursor-pointer'>Facebook</p>
            </Link>
            <Link href='https://www.whatsapp.com'>
              <p className='underline cursor-pointer'>WhatsApp</p>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}