import "../styles/globals.css";
import styles from '../styles/Home.module.css'
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../component/Footer";
import Navbar from "../component/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
