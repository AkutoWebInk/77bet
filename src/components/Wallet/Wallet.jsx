// CSS:
import styles from './Wallet.module.css';

// Assets:
import deposit from './assets/deposit.png';
// Auth/info:
import { useAuth } from '../../context/AuthProvider';
import { useDeposit } from '../../context/DepositProvider';
import { useWithdrawal } from '../../context/WithdrawalProvider';

import { formatValue } from '../../api/services/deposit';

export default function Wallet() {
  
  const {user} = useAuth();
  const {setIsVisible} = useDeposit();
  const {setIsVisible: setWithdrawalIsVisible} = useWithdrawal();
  
  
  return (
    <section className={styles.finance}>
      
      <div className={styles.funds}>
        <p>$</p> <span>{formatValue(String(user?.balance || 0))}</span>
      </div>

      <img src={deposit} className={styles.icon} />
      
      <div className={styles.buttons}>
        <button className={styles.withdraw} onClick={() => setWithdrawalIsVisible(true)}>Retirar</button>
        <button className={styles.deposit} onClick={()=> setIsVisible(true)}> Depositar </button>
      </div>
    
    </section>
  )
}