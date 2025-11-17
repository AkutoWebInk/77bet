import React, { useState } from "react";
import styles from './login.module.css';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import headerImg from '../../assets/old-assets/double-deposit.png';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('login', form);
  };

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <img src={headerImg} className={styles.headerImg}/>
      </div>

      <div className={styles.bodyText}>
        <h2>Entrar</h2>
        <p>Faça login para continuar na sua conta.</p>
      </div>

      <form className={styles.loginContainer} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            aria-label="E-mail"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Senha"
            required
            aria-label="Senha"
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword(v => !v)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <FaEye className={styles.reactIcon}/> : <FaRegEyeSlash className={styles.reactIcon}/>} 
          </button>
        </div>

        <button type="submit">Entrar</button>
      </form>
    </section>
  );
}