import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Layout from "../components/layout";
import Link from "next/link";

const MyFace = () => (
  <Image
    src="/images/leo.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={158} // Desired size with correct aspect ratio
    alt="Leo"
    style={{
      borderRadius: '50%'
    }}
  />
);

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Leo Wheelan</title>
        <meta name="description" content="Leo Wheelan's website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <header className={styles.header}>
        <MyFace/>
        <h1 className={utilStyles.heading2Xl}>Leo Wheelan</h1>
      </header>

      <main className={styles.main}>
        <section className={utilStyles.headingMd}>
          <p className={styles.intro}>
            Hello, welcome to my website. I&apos;m a software engineer currently working at <Link href="https://birdie.care">
            <a>Birdie</a>
          </Link>.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default Home
