import Head from "next/head";
import Navbar from "../component/Header";
import Herobanner from "../component/Hero";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AD</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Herobanner />
    </div>
  );
};
export default Home;
