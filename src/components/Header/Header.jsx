import React from 'react';
import styles from './Header.module.css';
import topUP from '../../assets/topUp.png';
import token from '../../assets/token.png';
import notification from '../../assets/notification.png'

const Header = ({ userType, img, content}) => {
    const isChild = userType === 'child';

    return (
        <div className={styles.header}>
            <img src={img} alt="pofileiIcon" className={styles.profileIcon} />
            {isChild ? (
                <div className={styles.childHeader}>
                    <p>Привет, {content}!</p>
                </div>
            ) : (
                <div className={styles.parentHeader}>
                    <div className={styles.balance}>
                        <img src={token} alt="token" />
                        <p>{content}c</p>
                    </div>
                    <div className={styles.action}>
                        <button>
                            <img src={topUP} alt="TopUp" />
                        </button>
                        <p>Пополнить</p>
                    </div>
                </div>
            )}
            <img src={notification} alt="notificationIcon" />
        </div>
    );
};

export default Header;