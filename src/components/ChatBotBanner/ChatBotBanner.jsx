import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from './ChatBotBanner.module.css';
import bird from "../../assets/bird.png";

function ChatBotBanner() {
  const navigate = useNavigate();
  return (
    <motion.div 
      className={styles.wrapper}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
        <div className={styles.circle}>
            <img src={bird} alt="bird" />
        </div> 
        <div className={styles.content}>
            <h3 className={styles.title}>Попробуй наш<br/>ИИ чат бот!</h3>
            <button className={styles.button} onClick={() => navigate("/chat")}>Начать</button>
        </div>
    </motion.div>
  )
}

export default ChatBotBanner    