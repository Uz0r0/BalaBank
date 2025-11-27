import React from 'react';
import styles from './Navigation.module.css';
import homeIcon from '../../assets/home.png';
import paymentsIcon from '../../assets/payments.png';
import historyIcon from '../../assets/history.png';
import profileIcon from '../../assets/profile.png';
import scannerIcon from '../../assets/scan.png';

const navItems = [
    { label: 'Главная', icon: homeIcon, path: '/home' },
    { label: 'Платежи', icon: paymentsIcon, path: '/payments' },
    { label: 'История', icon: historyIcon, path: '/history' },
    { label: 'Профиль', icon: profileIcon, path: '/profile' },
];

function Navigation() {
return (
    <nav className={styles.navWrapper}>
        <div className={styles.navContainer}>
            <div className={styles.navSection}>
                {navItems.slice(0, 2).map(item => (
                    <a key={item.label} href={item.path} className={styles.navItem}>
                        <img src={item.icon} alt={item.label} className={styles.icon} />
                        <span className={styles.label}>{item.label}</span>
                    </a>
                ))}
            </div>
            <button className={styles.centerButton}>
                <img src={scannerIcon} alt={scannerIcon}/>
            </button>
            <div className={styles.navSection}>
                {navItems.slice(2).map(item => (
                    <a key={item.label} href={item.path} className={styles.navItem}>
                        <img src={item.icon} alt={item.label} className={styles.icon} />
                        <span className={styles.label}>{item.label}</span>
                    </a>
                ))}
            </div>
        </div>
    </nav>
);
}

export default Navigation;