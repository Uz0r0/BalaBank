import React from "react";
import styles from "./BalanceCard.module.css";
import token from "../../assets/token2.png"; 

const BalanceCard = ({userType, amount, balance}) => {
    const isChild = userType === 'parent';
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.right}>
                    <div className={styles.iconWrap}>
                        <img src={token} alt="starIcon" />
                    </div>
                    <div className={styles.allowed}>
                        {isChild ? (
                            <span className={styles.label}>Доступно сегодня</span>
                        ) : (
                            <span className={styles.label}>Мои деньги</span>
                        )}
                        <span className={styles.BigValue}>{amount}с</span>
                    </div>
                </div>
                <button className={`${styles.plusBtn} ${isChild ? '' : styles.hidden}`}>+</button> 
            </div>
            <div className={styles.balance}>
                {isChild ? (
                    <span className={styles.sub}>Общий баланс </span>
                ) : (
                    <span className={styles.label}>Отправлено сегодня</span>
                )}
                <span className={styles.value}>{balance}с</span>
            </div>
            
        </div>
    );
};

export default BalanceCard;