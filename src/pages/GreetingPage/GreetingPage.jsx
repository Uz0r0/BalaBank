import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from '../style.module.css';
import bapi from '../../assets/bapi.png';


function GreetingPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 150,
            damping: 15,
            duration: 0.4
          }}
          className={styles.content}
        >
            <p className={styles.title}>Добро пожаловать в <strong>Balabank!</strong></p>
            <img src={bapi} alt="bapi-icon" />
            <div className={styles.space}></div>
            <p className={styles.subTitle}>Меня зовут Бапи и я помогу тебе управлять деньгами!</p>
            <div className={styles.space}></div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => navigate("/role")}
              className={styles.startBtn}
            >
              Начать
            </motion.button >
        </motion.div>
    </div>
  )
}

export default GreetingPage