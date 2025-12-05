import React from 'react';
import styles from './TargerCard.module.css';

const TargerCard = ({image, title, amount, target}) => {
  return (
    <div 
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }} 
    >
      <div className={styles.overlay}>
        <span className={styles.itemTitle}>{title}</span>
        <span className={styles.currentAmount}>{amount}c</span>
        <span className={styles.targetAmount}>Цель: <strong>{target}c</strong></span>
      </div>    
    </div>
  );
};

export default TargerCard;