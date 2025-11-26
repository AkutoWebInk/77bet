// CSS:
import styles from './Wallet.module.css';

// Assets:
import deposit from './assets/deposit.png';
// Auth/info:
import { useAuth } from '../../context/AuthProvider';
import { use } from 'react';


export default function Wallet() {
  
  const {user} = useAuth();
  
  return (
    <section className={styles.finance}>
      
      <div className={styles.funds}>
        <p>$</p><span>{user?.balance?.toFixed(2)}</span>
      </div>

      <img src={deposit} className={styles.icon} />
      
      <div className={styles.buttons}>
        <button className={styles.withdraw}>Retirar</button>
        <button className={styles.deposit}>Depositar</button>
      </div>
    
    </section>
  )
}