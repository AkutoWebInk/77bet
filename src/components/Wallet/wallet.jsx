// CSS:
import styles from './wallet.module.css';

// Assets:
import deposit from '../../assets/deposit.png';


export default function Wallet() {
  return (
    <section className={styles.finance}>
      <div className={styles.funds}>
        <p>$</p><span>300.000,00</span>
      </div>
      <img src={deposit} className={styles.icon} />
      <div className={styles.buttons}>
        <button className={styles.withdraw}>Retirar</button>
        <button className={styles.deposit}>Depositar</button>
      </div>
    </section>
  )
}