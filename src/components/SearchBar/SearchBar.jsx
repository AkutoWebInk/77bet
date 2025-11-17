import styles from './SearchBar.module.css';
import { CiSearch } from "react-icons/ci";

export default function SearchBar({placeholder='Search'}) {
  return (
    <section className={styles.searchSection}>
        
        <input type="text" className={styles.searchInput} placeholder={placeholder}/>
        
        <button className={styles.searchButton} >
            <CiSearch className={styles.searchIcon}/>
        </button>

    </section>
  );
}