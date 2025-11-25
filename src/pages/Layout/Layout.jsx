// CSS:
import styles from './Layout.module.css';
// Components:
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
//Outlet:
import { Outlet } from "react-router-dom";



export default function Layout() {
  return (
    <section className={styles.layout}>
      
      <Header />

      <section className={styles.content}>
        <Outlet />
      </section>
      
      <Navbar />
      <Footer />

    </section>
  );
}