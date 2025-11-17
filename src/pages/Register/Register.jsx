import React, { useState } from "react";
import styles from './Register.module.css';
import { MdTextsms } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import headerImg from './assets/double-deposit.png';



// API calls:
import {register} from '../../api/services/register';




export default function Register() {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    smscode: '',
    cpf: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await register(formData);
      console.log('register result:', result);
    } catch (error) {
      console.log('register error:', error);
    }
  };


  const handleSendSms = (e) => {
    e.preventDefault();
    console.log('Send SMS to', formData.phone);
    // implement real sending logic here
  };

  const togglePassword = () => setShowPassword(v => !v);

  return (
    <section className={styles.page}>
        <div className={styles.header}>
          <img src={headerImg} className={styles.headerImg} />
        </div>

        <div className={styles.bodyText}>
          <h2>Criar Conta</h2>
          <p>Preencha os campos abaixo para criar sua conta.</p>
        </div>
      
      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <span className={styles.leftAddon}>+55</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Número de Celular"
            required
            aria-label="Número de Celular"
          />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.leftAddon}>Código</span>
          <input
            type="text"
            name="smscode"
            className={styles.hasRightAddon}
            value={formData.smscode}
            onChange={handleChange}
            placeholder="Verificação por SMS"
            required
            aria-label="Verificação por SMS"
          />
          <button
            type="button"
            className={styles.rightAddon}
            onClick={handleSendSms}
            aria-label="Enviar código por SMS"
          >
            <MdTextsms className={styles.reactIcon}/>
          </button>
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.leftAddon}>CPF</span>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="CPF"
            required
            aria-label="CPF"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            aria-label="E-mail"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Senha"
            required
            aria-label="Senha"
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={togglePassword}
            aria-pressed={showPassword}
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <FaEye className={styles.reactIcon} /> : <FaRegEyeSlash className={styles.reactIcon}/>}
          </button>
        </div>

        <button type="submit">Criar Conta</button>
      </form>
    </section>
  );
}