import React from 'react';
import styles from './AvatarList.module.css';
import requestIcon from '../../assets/request.png'

function AvatarList({users, userType}) {
    const isChild = userType === 'child';

    return (
        <>
            <div className={styles.container}>
                {users.map(user => (
                    <div 
                        key={user.id} 
                        className={`${styles.avatarItem} ${user.isSelected ? styles.selected : ''}`}
                    >
                        <div className={styles.avatarWrapper}>
                            <img 
                                src={user.avatarUrl} 
                                alt={`Аватар ${user.name}`} 
                                className={styles.avatar} 
                            />
                        </div>
                        <span className={styles.name}>{user.name}</span>
                    </div>
                ))}
                <div className={`${isChild ? styles.hidden1 : styles.hidden}`}>aaaaa</div>
            </div>
            <button className={`${styles.BtnStyle} ${!isChild ? styles.hidden : ''}`}>
                <img src={requestIcon} alt="requestIcon" />
                <p>Запросить денег</p>
            </button>
        </>
        
    );
}

export default AvatarList;