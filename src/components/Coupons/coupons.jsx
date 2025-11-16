// CSS:
import styles from './coupons.module.css';
import { IoIosSend } from "react-icons/io";



export default function ClaimCoupons(){
    return(
        <section className={styles.component}>
            <input type="text" placeholder='Cupom'/>
            <button><IoIosSend /></button>
        </section>
    )
}