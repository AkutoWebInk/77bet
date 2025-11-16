import styles from './profile.module.css';

// Assets
import profilePic from './assets/user.png';

// Components
import VIP from '../../components/VIP/vip';
import TransactionsHistory from '../../components/Transactions/transactions';
import ExpandingButton from '../../components/ExpandingButton/expandingbutton';
import Wallet from '../../components/Wallet/wallet';

// Expanding Button Icons
import cashFlow from './assets/cash-flow.png';
import invitation from './assets/invitation.png';
import coupon from './assets/coupon.png';
import support from './assets/support.png';

//Logout Icon
import { CiLogout } from "react-icons/ci";




export default function Profile() {


    return (
      <section className={styles.page}>
         <section className={styles.profile}>
          <img src={profilePic} className={styles.profilePic} />
          <span> 20cm Molengão </span>
          <p> ID: 000000001 </p>
          <Wallet/>
        </section> 

        <VIP vipProgress={50}/>


        <ExpandingButton icon={cashFlow} text={'Relatórios'} content={<TransactionsHistory/>}/>
        <ExpandingButton icon={invitation} text={'Convide & Ganhe'}/>
        <ExpandingButton icon={coupon} text={'Resgatar Cupom'}/>
        <ExpandingButton icon={support} text={'Suporte'}/>
        
        <button className={styles.logout}>
          <CiLogout className={styles.icon}/>
          <span>Sair</span>  
        </button> 

      </section>
    )
}