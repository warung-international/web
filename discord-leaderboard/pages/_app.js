import '../css/style.css'
import { Heading } from '../comp/Heading';
import { Navbar } from '../comp/Navbar';
import { Footer } from '../comp/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Heading />
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
