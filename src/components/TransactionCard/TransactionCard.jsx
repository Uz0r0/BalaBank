import React from 'react';
import styles from './TransactionCard.module.css';
import income from '../../assets/income.png';
import expense from '../../assets/expense.png';

const TransactionCard = ({ type, amount }) => {
  const isIncome = type === "Пополнение";
  const img = isIncome ? income : expense;
  return (
    <div className={`${styles.card} ${isIncome ? styles.income : styles.expense}`}>
      <div className={styles.text}>
        <p className={styles.type}>{type}</p>
        <p className={styles.amount}>{amount}c</p>
      </div>
      <img src={img} alt={type} className={styles.img} />
    </div>
  );
};

export default TransactionCard; 