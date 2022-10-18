// import Alert from './alert'
import Footer from './footer'
import Header from './header';
import Container from './container';
// import Meta from './meta'

export default function Layout({children}) {
  return (
    <>
      {/*<Meta />*/}
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <Header/>
        <Container>
          <main>{children}</main>
        </Container>
      </div>
      <Footer/>
    </>
  )
}