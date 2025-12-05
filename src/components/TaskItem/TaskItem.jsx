import React from 'react';
import { motion } from "framer-motion";
import taskIcon from '../../assets/task.png';
import styles from './TaskItem.module.css'
import notificationIcon from '../../assets/notification.png';

function TaskItem({ taskText, isCompleted, iconUrl, userType, amount}) {
    const isChild = userType === 'child';
    const statusText = isCompleted ? 'Выполнено' : 'Не выполнено';
    const statusClass = isCompleted ? styles.statusCompleted : styles.statusPending;
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.taskCard}
        >
            <div className={styles.content}>
                <div className={styles.iconContainer}>
                    <img src={iconUrl || taskIcon} alt="taskIcon" className={styles.taskIcon} />
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
        </motion.div>
    );
}

export default TaskItem;