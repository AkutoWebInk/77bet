// CSS:
import styles from './layout.module.css';
// Components:
import Header from '../../components/Header/header';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
//Outlet:
import { Outlet } from "react-router-dom";



export default function Layout({isLoggedIn}){
    return(
        <section className={styles.layout}>
            
            <Header isLoggedIn={isLoggedIn}/>

            <section className={styles.content}> <Outlet/> </section>
            
            <Navbar/>
            <Footer/>

        </section>
    )
}