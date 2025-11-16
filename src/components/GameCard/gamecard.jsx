import styles from './gamecard.module.css';
import noImgIcon from '../../assets/white.png'



export default function GameCard({ gameImg }) {
  const imgSrc = gameImg || noImgIcon;

  return (
    <section className={styles.gameCard}>
      <img src={imgSrc} className={styles.gameImg} />
    </section>
  );
}   