import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import '../styles/globals.css';

import { Navbar, Footer } from '../components';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/d28ffdfdea.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default MyApp;
