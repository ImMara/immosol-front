import Head from 'next/head';
import Navbar from "../components/navbar/Navbar";
import '../styles/styles.css';
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </>
  )
}

export default MyApp
