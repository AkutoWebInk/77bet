// CSS:
import styles from './Deposit.module.css';
// Functions
import { formatValue } from '../../api/services/deposit';


//Icons
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import favicon from  './assets/favicon.png';
import pixImg from './assets/pix.png';


    export default function Deposit({visible, onClose}){
        // <input type="text" placeholder='Valor' />
        const [placeholder, setPlaceholder] = useState('Valor');
        const [value, setValue] = useState('');

        // {visible, onClose} 
        useEffect(() => {
            if (visible) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return () => {
                document.body.style.overflow = 'auto';
            };
        }, [visible]);

        if (!visible) return null;
        


        function handleChange(e){
            setValue(formatValue(e.target.value));
        }
        function selectValue(amount) {
            setValue(formatValue(String(amount)));
        }
        
    return (
        <section className={styles.component}>

            {/* Close Button */}
            <button className={styles.closeButton} onClick={onClose}><IoCloseOutline/></button>
                
            {/* 'Depositar' */}
            <div className={styles.title}>
                <span> Depositar </span>
                <p> Adicione saldo à sua conta</p>
            </div>

            {/* Woovi Icon */}
            <div className={styles.provider}>
                <img className={styles.wooviIcon} src={favicon}/>
                <span>Woovi</span>
            </div>

            {/* Information */}
            <div className={styles.information}>
                <div>
                    <p> Método de pagamento </p>
                    <span> Woovi </span>
                    <img className={styles.pixIcon} src={pixImg}/>
                </div>
                <div>
                    <p> Valor Minimo </p>
                    <span> R$10,00</span>
                </div>
            </div>


            {/* Interactives */}
            <span className={styles.valueInfo}>Escolha ou digite o valor desejado:</span>
            <input type="text" value={value} placeholder={placeholder} onChange={handleChange} />
            
            <div className={styles.interactives}>
                <button onClick={()=> selectValue(5000)}>R$ 50 </button>
                <button onClick={()=> selectValue(10000)}>R$ 100</button>
                <button onClick={()=> selectValue(15000)}>R$ 150</button>
                <button onClick={()=> selectValue(25000)}>R$ 250</button>
                <button onClick={()=> selectValue(50000)}>R$ 500</button>
                <button onClick={()=> selectValue(100000)}>R$ 1.000</button>
                <button onClick={()=> selectValue(200000)}>R$ 2.000</button>
                <button onClick={()=> selectValue(500000)}>R$ 5.000</button>
                <button onClick={()=> selectValue(1000000)}>R$ 10.000</button>
            </div>
            <button className={styles.generatePix}> Gerar PIX </button>

        </section>
    )
}