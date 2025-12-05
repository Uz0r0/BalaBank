import React from 'react';
import { motion } from "framer-motion";
import styles from './TransactionCard.module.css';
import income from '../../assets/income.png';
import expense from '../../assets/expense.png';

const TransactionCard = ({ type, amount }) => {
  const isIncome = type === "Пополнение";
  const img = isIncome ? income : expense;
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={`${styles.card} ${isIncome ? styles.income : styles.expense}`}
    >
      <div className={styles.text}>
        <p className={styles.type}>{type}</p>
        <p className={styles.amount}>{amount}c</p>
      </div>
      <img src={img} alt={type} className={styles.img} />
    </motion.div>
  );
};

export default TransactionCard; 