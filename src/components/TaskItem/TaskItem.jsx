import React from 'react';
import styles from './TaskItem.module.css'
import notificationIcon from '../../assets/notification.png';

function TaskItem({ taskText, isCompleted, iconUrl, userType, amount}) {
    const isChild = userType === 'child';
    const statusText = isCompleted ? 'Выполнено' : 'Не выполнено';
    const statusClass = isCompleted ? styles.statusCompleted : styles.statusPending;
    
    return (
        <div className={styles.taskCard}>
            
            <div className={styles.content}>

                <div className={styles.iconContainer}>
                    <img src={iconUrl} alt="taskIcon" className={styles.taskIcon} />
                </div>

                <div className={styles.textBlock}>
                    <p className={styles.taskText}>{taskText}</p>
                    <span className={statusClass}>
                        {statusText}
                    </span>
                </div>
            </div>

            {isChild ? (
                <p className={styles.amount}> +{amount}c</p>
            ) : (
                <button className={`${styles.bellButton} ${isCompleted ? styles.hidden : ''}`}>
                    <img src={notificationIcon} alt="notification" />
                </button>         
            )}   
        </div>
    );
}

export default TaskItem;