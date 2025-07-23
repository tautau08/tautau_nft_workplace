import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast'; // ✅ Add this import

import { NFTProvider } from '../context/NFTContext';
import { Navbar, Footer } from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        console.log('MetaMask account changed:', accounts[0]);
        window.location.reload();
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        if (window.ethereum) {
          try {
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          } catch (error) {
            console.log('Error removing listener:', error);
          }
        }
      };
    }
  }, []);

  return (
    <NFTProvider>
      <ThemeProvider attribute="class">
        <Head>
          <title>CrypTau NFT Marketplace</title>
          <link rel="icon" type="image/png" href="/logo.png" />
        </Head>
        <div className="dark:bg-nft-dark bg-white min-h-screen">
          <Navbar />
          <div className="pt-65">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>

        {/* ✅ Add this Toaster component */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />

        <Script src="https://kit.fontawesome.com/d28ffdfdea.js" crossOrigin="anonymous" />
      </ThemeProvider>
    </NFTProvider>
  );
};

export default MyApp;
