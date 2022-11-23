import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.main}>
      <Button variant="contained">
        <Link href="/posts">
          <a>Visitar Posts</a>
        </Link>
      </Button>
      </main>
    </div>
  )
}

export default Home
