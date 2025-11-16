import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
// Components
import GameList from '../../components/GameList/gamelist';
import SearchBar from '../../components/SearchBar/searchbar';
import PromoCarousel from '../../components/PromoCarousel/promocarousel'; 
import Swiper from '../../components/Swiper/swiper';


//Dev
import whiteImg from '../../assets/white.png';



const games = [
  { img: whiteImg },
  { img: whiteImg },
  { img: whiteImg },
];

const shortcuts =[
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
  {img:whiteImg, name:'NULL'},
]


const promoList =[whiteImg, whiteImg]



export default function Home() {


  return (
    <section className={styles.mainContainer}>
      <PromoCarousel promoList={promoList}/>
      <Swiper shortcuts={shortcuts} />
      <SearchBar placeholder='Pesquisar'/>

      <section className={styles.gamesSection}>
        <GameList producerIcon={whiteImg} games={games}/>
        <GameList producerIcon={whiteImg}/>
        <GameList producerIcon={whiteImg}/>
      </section>

    </section>
  );
}