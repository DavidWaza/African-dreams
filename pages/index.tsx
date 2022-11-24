import Head from "next/head";
import Explore from "../component/Explore";
import Navbar from "../component/Header";
import Herobanner from "../component/Hero";
import Location from "../component/Location";
import Subscribe from "../component/Subscribe";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AD | Home</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Herobanner />
      <Explore />
      <Location />
      <Subscribe />
    </div>
  );
};
export default Home;
