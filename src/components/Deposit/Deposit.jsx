// CSS:
import styles from './Deposit.module.css';

//Icons
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from 'react';
import favicon from  './assets/favicon.png';


    export default function Deposit({visible, onClose}){
        
        useEffect(() => {
            if (visible) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, [visible]);

        if (!visible) return null;

    return (
        <section className={styles.component}>

            {/* Close Button */}
            <button className={styles.closeButton} onClick={onClose}><IoCloseOutline/></button>
                
            {/* 'Depositar' */}
            <div className={styles.title}>
                <span> Depositar </span>
                <p> Adicione saldo à sua conta</p>
            </div>

            {/* Woovi Icon */}
            <div className={styles.provider}>
                <img src={favicon}/>
                <span>Woovi</span>
            </div>

            <div className={styles.information}>
                <div>
                    <span> Método de pagamento </span>
                    <span> Woovi</span>
                </div>

            </div>


        </section>
    )
}