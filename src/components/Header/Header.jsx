// CSS:
import styles from './Header.module.css';

// Assets:
import icon from './assets/77-.png';

// Components:
import AuthButtons from '../AuthButtons/AuthButtons';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

export default function Header({isLoggedIn}) {
  return (

    <section className={styles.component}>

      <img src={icon} className={styles.icon}/>
    
      {isLoggedIn ? <HeaderProfile/> : <AuthButtons />}
    
    </section>
  );
}