// React:
import { NavLink } from 'react-router-dom';

// CSS:
import styles from './Navbar.module.css';

// Assets:
import slotsIcon from './assets/slots.png';
import casinoIcon from './assets/casino.png';
import background from './assets/background.png';

export default function Navbar() {
  return (
    <section className={styles.component}>

      <img src={background} className={styles.background} />

      {/* Home Button */}
      <NavLink className={styles.button} to='/'>
        <img src={slotsIcon} className={styles.icon}/>
        <span> Slots </span>
      </NavLink>

      {/* Other Button */}
      <NavLink className={styles.button} to='/casino'>
        <img src={casinoIcon} className={styles.icon}/>
        <span> Casino </span>
      </NavLink>
      
    </section>
  );

}
