// CSS:
import styles from './VIP.module.css';
// React:
import React, { useState, useEffect } from "react";
// Components
import { MdExpandMore } from "react-icons/md";
// VIP Icons
import vip from './assets/vip.png';








export default function VIP({vipProgress}){

    // Progress-bar controls
    const[progress, setProgress] = useState(vipProgress);
    useEffect(()=>{setProgress(vipProgress);},[vipProgress]);

    //Expanding controls
    const[expanded, setExpanded] = useState(false);

    return (
        <section className={styles.component}>


            <section className={styles.container}>
                <img src={vip} className={styles.vip}/>

                <div className={styles.bar}>
                    <div className={styles.progress} style={{width: `${progress}%`}}> </div>
                </div>
            </section>
            <section className={styles.under}>
                <button className={`${styles.button} ${expanded? styles.expanded : styles.collapsed}`} onClick={()=> setExpanded(prev => !prev)}>
                        <span>Entenda o VIP</span>
                    <>
                        <MdExpandMore  className={styles.icon}/>
                    </>
                    <div>
                    <p>
                        Um VIP é um jogador especial que recebe benefícios exclusivos por sua fidelidade, 
                        como bônus diferenciados, 
                        limites maiores de depósito e saque, 
                        promoções especiais e atendimento personalizado.
                        <br />
                        Para aumentar o nível VIP, 
                        o usuário precisa jogar com mais frequência e/ou aumentar o valor das apostas. 
                        
                        Quanto maior o volume de <strong>apostas</strong>, atividade e <strong>depositos</strong> na plataforma, 
                        mais pontos de fidelidade ou status VIP o jogador acumula, 
                        avançando para níveis com benefícios maiores.
                    </p>
                    </div>
                </button>
            </section>
        </section>
    )
}