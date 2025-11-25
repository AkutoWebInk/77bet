// CSS
import styles from './Profile.module.css';

// React
import {useEffect, useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import {fetchProfile} from '../../api/services/profile';


// Assets
import profilePic from './assets/user.png';
import background from './assets/lava.png'

// Components
import VIP from '../../components/VIP/VIP';
import ExpandingButton from '../../components/ExpandingButton/ExpandingButton';
import Wallet from '../../components/Wallet/Wallet';
import TransactionsHistory from '../../components/Transactions/Transactions';
import ClaimCoupons from '../../components/Coupons/Coupons';

// Expanding Button Icons
import cashFlow from './assets/cash-flow.png';
import invitation from './assets/invitation.png';
import coupon from './assets/coupon.png';
import support from './assets/support.png';

//Logout Icon
import { CiLogout } from "react-icons/ci";




export default function Profile() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(()=>{
    async function loadProfile() {
      const data = await fetchProfile();
      if(!data){
        navigate('/login');
        return;
      }
      setUser(data);
    }      
    loadProfile();
  }, []);
  
  
  
  return (
    <section className={styles.page}>
      <img src={background} className={styles.background} />

        <section className={styles.profile}>
        <img src={profilePic} className={styles.profilePic} />
        <span> 20cm Molengão </span>
        <p> ID: 000000001 </p>
        <Wallet/>
      </section> 

      <VIP vipProgress={90}/>

      <ExpandingButton icon={cashFlow} text={'Relatórios'} content={<TransactionsHistory />} />
      <ExpandingButton icon={invitation} text={'Convide & Ganhe'}/>
      <ExpandingButton icon={coupon} text={'Resgatar Cupom'} content={<ClaimCoupons />} />
      <ExpandingButton icon={support} text={'Suporte'}/>
      
      <button className={styles.logout}>
        <CiLogout className={styles.icon}/>
        <span>Sair</span>  
      </button> 

    </section>
  )
}