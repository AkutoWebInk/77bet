// CSS:
import styles from './Header.module.css';
// Assets:
import icon from './assets/77-.png';
// Auth:
import { useAuth } from '../../context/AuthProvider';
// Components:
import AuthButtons from '../AuthButtons/AuthButtons';
import HeaderProfile from '../HeaderProfile/HeaderProfile';

export default function Header() {
  const { user } = useAuth();

  return (
    <section className={styles.component}>

      <img src={icon} className={styles.icon}/>
    
      {user ? <HeaderProfile/> : <AuthButtons />}
    
    </section>
  );
}