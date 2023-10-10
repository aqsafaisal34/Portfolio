import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

export default function App({ Component, pageProps }) {
  return (
    <>
   <Navbar />
   <div  id='about'> <About/> </div>
   <div  id='services'> <Services   /> </div>
   <div id='portfolio'> <Portfolio  /> </div>
   <Component {...pageProps} />
  <div id='contact'> <Footer  /> </div> 
   </>
  )
}
