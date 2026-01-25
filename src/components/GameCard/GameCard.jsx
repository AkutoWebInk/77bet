import { useState } from 'react';
import styles from './GameCard.module.css';
import noImgIcon from './assets/white.png'
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

export default function GameCard({ gameImg, title = "Game Title" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgSrc = gameImg || noImgIcon;

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section 
      className={`${styles.gameCard} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleClick}
    >
      <img src={imgSrc} className={styles.gameImg} />
      
      <div className={`${styles.overlay} ${isExpanded ? styles.showOverlay : ''}`}>
          <div className={styles.expandedContent}>
            <h3 className={styles.gameTitle}>{title}</h3>
            <div className={styles.actions}>
              <button className={styles.playButton} onClick={(e) => e.stopPropagation()}>
                <FaPlay /> JOGAR
              </button>
            </div>
          </div>
      </div>
    </section>
  );
}