// CSS
import styles from './Withdrawal.module.css';

// Functions
import { formatValue } from '../../api/services/deposit';

// API calls
import { requestWithdrawal } from '../../api/services/withdrawal';

// Icons
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import favicon from './assets/favicon.png';
import pixImg from './assets/pix.png';

export default function Withdrawal({ visible, onClose }) {

    const { user } = useAuth();
    const [placeholder] = useState('Valor do saque');
    const [value, setValue] = useState('');
    const [pixKeyType, setPixKeyType] = useState('CPF');
    const [pixKey, setPixKey] = useState('');
    const [withdrawalResult, setWithdrawalResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);

    async function handleWithdrawal() {
        if (!amount || amount <= 0) return alert('Informe um valor válido');
        if (!pixKey) return alert('Informe a sua chave PIX');

        setLoading(true);
        try {
            const payload = {
                amount,
                pixKey,
                pixKeyType,
                method: 'pix',
                provider: 'woovi'
            };
            const response = await requestWithdrawal(payload);
            if (response) {
                setWithdrawalResult(response);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    // Component visibility:
    useEffect(() => {
        document.body.style.overflow = visible ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [visible]);
    if (!visible) return null;



    function handleChange(e) {
        const formatted = 'R$ ' + formatValue(e.target.value);
        setValue(formatted);

        const numeric = Number(formatted.replace(/\D/g, ''));
        setAmount(numeric);
    }
    function handleClose() {
        setWithdrawalResult(null);
        setValue('');
        onClose();
    }


    return (
        <section className={styles.modalOverlay}>
            <button className={styles.closeButton} onClick={handleClose}>
                <IoCloseOutline />
            </button>
            
            {withdrawalResult ? (
                <div className={styles.result}>

                    <div className={styles.header}>
                        <span className={styles.headerTitle}>Saque Solicitado!</span>
                        <p className={styles.headerSubtitle}>Sua solicitação foi recebida</p>
                    </div>
                    <span className={styles.resultAmount}>R$ {formatValue(String(withdrawalResult.data?.amount || amount))} </span>

                    <span className={styles.resultDetails}>Detalhes do Saque</span>
                    <span className={styles.resultText}> 
                        Método:
                         <br />
                        <span className={styles.resultSubtext}> {withdrawalResult.data?.method || 'PIX'} </span> 
                    </span>   
                    <span className={styles.resultText}>
                        Status: 
                        <br />
                        <span className={styles.resultSubtext}> {withdrawalResult.data?.status || 'Pendente'} </span>    
                    </span>

                    <section className={styles.resultInfo}>
                        <span className={styles.resultInfoText}>Você receberá o valor em sua conta PIX em até 24 horas úteis.</span>
                    </section>

                    <button className={styles.backButton} onClick={handleClose}>
                        Voltar
                    </button>
                </div>
            ) : (
                <>
                    <div className={styles.header}>
                        <span className={styles.headerTitle}>Retirar fundos</span>
                        <p className={styles.headerSubtitle}>Saque seu saldo da sua conta.</p>
                    </div>
                    
                    <div className={styles.providers}>
                        <img className={styles.providerIcon} src={favicon} alt="Woovi" />
                        <img className={styles.pixIcon} src={pixImg} alt="Pix" />
                    </div>

                    <div className={styles.balance}>
                        <span className={styles.balanceLabel}>Saldo disponível</span>
                        <p className={styles.balanceAmount}>R$ {formatValue(String(user?.balance || 0))}</p>
                    </div>
                
                    
                    <input type="text" className={styles.amountInput} value={value} placeholder={placeholder} onChange={handleChange}/>
                    <input type="text" className={styles.pixInput} value={pixKey} onChange={(e) => setPixKey(e.target.value)} placeholder={`Informe a sua chave PIX ( ${pixKeyType} )`}/>
                    
                    <div className={styles.pixSelector}>
                        <button className={`${styles.pixSelectorButton} ${pixKeyType === 'CPF' ? styles.active : ''}`} onClick={() => setPixKeyType('CPF')}>CPF</button>
                        <button className={`${styles.pixSelectorButton} ${pixKeyType === 'Telefone' ? styles.active : ''}`} onClick={() => setPixKeyType('Telefone')}>Celular</button>
                        <button className={`${styles.pixSelectorButton} ${pixKeyType === 'E-mail' ? styles.active : ''}`} onClick={() => setPixKeyType('E-mail')}>E-mail</button>
                        <button className={`${styles.pixSelectorButton} ${pixKeyType === 'Aleatório' ? styles.active : ''}`} onClick={() => setPixKeyType('Aleatório')}>Chave Aleatória</button>
                    </div>
                    <div className={styles.infoBox}>
                        <span>Atenção:</span>
                        <p>O CPF vinculado à chave PIX informada para saque precisa ser o mesmo registrado na sua conta!</p>
                    </div>
                    
                    <button className={styles.confirmButton} onClick={handleWithdrawal} disabled={loading}>
                        {loading ? 'Processando...' : 'Solicitar Saque'}
                    </button>
                </>
            )}
        </section>
    );
}
