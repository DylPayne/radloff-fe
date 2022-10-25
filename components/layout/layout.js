// import Alert from './alert'
import Footer from './footer';
import Header from './header';
import Container from './container';
import Head from 'next/head';
// import Meta from './meta'

export default function Layout({ children }) {
  return (
    <>
      {/*<Meta />*/}
      <Head>
        <title>Radloff Squash Club</title>
        <meta
          name='desc'
          content='Built in 1979, our little club finds itself in the middle of the Radloff Park Sports grounds. Surrounded by mountains and a stone’s throw away from the Lourens river, we are proud to welcome squash players from all over the world.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <div className='min-h-screen'>
        {/*<Alert preview={preview} />*/}
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <Footer />
    </>
  );
}
