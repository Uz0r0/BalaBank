import React from 'react';
import { motion } from "framer-motion";
import styles from './AvatarList.module.css';
import requestIcon from '../../assets/request.png'

function AvatarList({users, userType}) {
    const isChild = userType === 'child';

    return (
        <>
            <motion.div 
                className={styles.container}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    duration: 0.4
                }}
            >
                {users.map(user => (
                    <div 
                        key={Math.random()} 
                        className={`${styles.avatarItem} ${user.isSelected ? styles.selected : ''}`}
                    >
                        <div className={styles.avatarWrapper}>
                            <img 
                                loading="lazy"
                                src={user.avatarUrl} 
                                alt={`Аватар ${user.name}`} 
                                className={styles.avatar} 
                            />
                        </div>
                        <span className={styles.name}>{user.name}</span>
                    </div>
                ))}
                <div className={`${isChild ? styles.hidden1 : styles.hidden}`}>aaaaa</div>
            </motion.div>
            <motion.button 
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`${styles.BtnStyle} ${!isChild ? styles.hidden : ''}`}
            >
                <img src={requestIcon} alt="requestIcon" />
                <p>Запросить денег</p>
            </motion.button>
        </>
        
    );
}

export default AvatarList;