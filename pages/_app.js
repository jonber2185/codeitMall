import Container from '@/components/Container';
import Header from '@/components/Header';
import ThemeProvider from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JonberMall</title>
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
   
  );
}
