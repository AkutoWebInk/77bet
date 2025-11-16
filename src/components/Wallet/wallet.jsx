import styles from './wallet.module.css'

export default function Wallet() {
  return (
    <section className={styles.finance}>
      <div className={styles.funds}>
        <p>$</p><span>300.000,00</span>
      </div>
      <div className={styles.buttons}>
        <button className={styles.withdraw}>Retirar</button>
        <button className={styles.deposit}>Depositar</button>
      </div>
    </section>
  )
}