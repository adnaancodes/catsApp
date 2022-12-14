import Head from "next/head";
import Jumbotron from "../components/Nav/Jumbotron/Jumbotron";

import DefaultLayout from "../layouts/Default";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Create Next App </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <main>
        <DefaultLayout>
          <Jumbotron />
        </DefaultLayout>
      </main>
    </div>
  );
}
