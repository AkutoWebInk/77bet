// CSS
import styles from './Profile.module.css';

// React
import { useAuth } from "../../context/AuthProvider";

// Assets
import profilePic from './assets/user.png';
import background from './assets/lava.png';

// Components
import VIP from '../../components/VIP/VIP';
import ExpandingButton from '../../components/ExpandingButton/ExpandingButton';
import Wallet from '../../components/Wallet/Wallet';
import TransactionsHistory from '../../components/Transactions/Transactions';
import ClaimCoupons from '../../components/Coupons/Coupons';

// Icons
import cashFlow from './assets/cash-flow.png';
import invitation from './assets/invitation.png';
import coupon from './assets/coupon.png';
import support from './assets/support.png';
import { CiLogout } from "react-icons/ci";

export default function Profile() {
  const { user, logout } = useAuth();   // get user from global auth
  
  return (
    <section className={styles.page}>
      <img src={background} className={styles.background} />

      <section className={styles.profile}>
        <img src={profilePic} className={styles.profilePic} />
        <span>{user?.firstName} {user?.lastName}</span>
        <p>ID: {user?.id}</p>
        <Wallet />
      </section>

      <VIP vipProgress={90} />

      <ExpandingButton icon={cashFlow} text="Relatórios" content={<TransactionsHistory />} />
      <ExpandingButton icon={invitation} text="Convide & Ganhe" />
      <ExpandingButton icon={coupon} text="Resgatar Cupom" content={<ClaimCoupons />} />
      <ExpandingButton icon={support} text="Suporte" />

      <button className={styles.logout} onClick={() => logout()}>
        <CiLogout className={styles.icon} />
        <span>Sair</span>
      </button>
    </section>
  );
}
