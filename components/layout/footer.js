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
            <Link href='https://www.facebook.com/radloffparksquash/'>
              <p className='underline cursor-pointer'>Facebook</p>
            </Link>
            <Link href='https://wa.me/270797744814?text=Hi%20there%2C%20I%20would%20like%20to%20contact%20you%20regarding%20the%20Radloff%20Squash%20Club.'>
              <p className='underline cursor-pointer'>WhatsApp</p>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}