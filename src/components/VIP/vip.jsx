import React, { useState, useEffect } from "react";
import styles from './vip.module.css';
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
                    <span>Entenda o seu VIP</span>
                    <MdExpandMore  className={styles.icon}/>
                </button>
            </section>
        </section>
    )
}