// CSS:
import styles from './header.module.css';

// Assets:
import icon from '../../assets/77-.png';

// Components:
import AuthButtons from '../AuthButtons/authbuttons';
import HeaderProfile from '../HeaderProfile/headerprofile';

export default function Header({isLoggedIn}) {
  return (

    <section className={styles.component}>

      <img src={icon} className={styles.icon}/>
    
      {isLoggedIn ? <HeaderProfile/> : <AuthButtons />}
    
    </section>
  );
}