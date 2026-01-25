import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
// Components
import GameList from '../../components/GameList/GameList';
import SearchBar from '../../components/SearchBar/SearchBar';
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'; 
import Swiper from '../../components/Swiper/Swiper';

// Assets
import background from '../Profile/assets/lava.png';
import doubleDepositBanner from '../Register/assets/double-deposit.png';

//Dev
import whiteImg from './assets/white.png';



const games = [
  { img: whiteImg },
  { img: whiteImg },
  { img: whiteImg },
];

const shortcuts = [
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
]


const promoList =[doubleDepositBanner, whiteImg]



export default function Home() {


  return (
    <section className={styles.mainContainer}>
      <img src={background} className={styles.background} />
      <section className={styles.headerContent}>
        <PromoCarousel promoList={promoList}/>
        <div className={styles.searchWrapper}>
          <SearchBar placeholder='Encontre seu jogo favorito...'/>
        </div>
        <Swiper shortcuts={shortcuts} />
      </section>

      <section className={styles.gamesSection}>
        <GameList title="Populares" games={games}/>
        <GameList title="Novidades" games={games}/>
        <GameList title="Slots" games={games}/>
      </section>

    </section>
  );
}