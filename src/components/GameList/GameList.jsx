import styles from './GameList.module.css';
import GameCard from '../GameCard/GameCard';
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export default function GameList({ title, producerIcon, games }) {
  
  const defaultGames = [
    { img: '' },
    { img: '' },
    { img: '' },
  ];

  const displayGames = games && games.length ? games : defaultGames;

  return (
    <section className={styles.container}>
      
      <NavLink to='' className={styles.producerButton}>
        <img src={producerIcon} className={styles.producerIcon} />
        <IoIosArrowForward className={styles.buttonArrow} />
      </NavLink>

      <section className={styles.content}>
        {displayGames.map((game, index) => (
          <GameCard key={index} gameImg={game.img} />
        ))}
      </section>
    </section>
  );
}
