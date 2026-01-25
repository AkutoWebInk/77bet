import React from 'react';
import styles from './Casino.module.css';
import GameList from '../../components/GameList/GameList';
import SearchBar from '../../components/SearchBar/SearchBar';
import background from '../Profile/assets/lava.png';

export default function Casino() {
    return (
        <section className={styles.page}>
            <img src={background} className={styles.background} />
            
            <div className={styles.header}>
                <h1 className={styles.title}>Casino</h1>
                <SearchBar placeholder='Pesquisar jogos...' />
            </div>

            <section className={styles.content}>
                <GameList title="Populares" />
                <GameList title="Slots" />
                <GameList title="Provedores" />
            </section>
        </section>
    );
}