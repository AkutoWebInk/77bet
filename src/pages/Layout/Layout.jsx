// CSS:
import styles from './Layout.module.css';
// Components:
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
//Outlet:
import { Outlet } from "react-router-dom";
// Warnings and notifications:
import Warning from '../../components/Warning/Warning';
import { useWarning } from '../../context/WarningProvider';


export default function Layout() {

  const {warning} = useWarning();

  return (
    <section className={styles.layout}>
      <Header />
      {warning && <Warning />}

      <section className={styles.content}>
        <Outlet />
      </section>
      
      <Navbar />
      <Footer />

    </section>
  );
}