import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/Main';
import Profile from '../components/Profile';

//getting api key from .env
const apiKey = process.env.MY_API_KEY;

export default function Home({ photos }) {
  console.log(photos);
  return (
    <div className={styles.container}>
      <Head>
        <title>BLING</title>
        <meta name="description" content="Coding challenge" />
        <link rel="icon" href="/money.png" />
      </Head>

      <main className={styles.main}>
        <Profile />
        <Main />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://api.unsplash.com/photos/random?count=20&orientation=landscape',
    {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    }
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};
