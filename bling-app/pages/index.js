import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/Main';
import Profile from '../components/Profile';

export default function Home() {
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
