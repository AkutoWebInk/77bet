import styles from './Swiper.module.css';


export default function CategorySwiper({shortcuts}) {
  return (
    <section className={styles.swiper}>
      {shortcuts.map((shortcut, index) => (
        <button key={index}>
          <img src={shortcut.img} className={styles.icon}/>
          <span>{shortcut.name}</span>
        </button>
      ))}
    </section>
  );
}