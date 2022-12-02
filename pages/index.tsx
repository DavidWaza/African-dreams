import Head from "next/head";
import Explore from "../component/Explore";
import Herobanner from "../component/Hero";
import Location from "../component/Location";
import Subscribe from "../component/Subscribe/index"

const Home = () => {

  return (
    <>
      <Head>
        <title>AD | Home</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herobanner />
      <Explore />
      <Location className={undefined} id={0} image={""} title={""} />
      <Subscribe />
    </>
  );
};
export default Home;
