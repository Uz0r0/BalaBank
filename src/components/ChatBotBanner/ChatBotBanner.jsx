import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './ChatBotBanner.module.css';
import bird from "../../assets/bird.png";

function ChatBotBanner() {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
        <div className={styles.circle}>
            <img src={bird} alt="bird" />
        </div> 
        <div className={styles.content}>
            <h3 className={styles.title}>Попробуй наш<br/>ИИ чат бот!</h3>
            <button className={styles.button} onClick={() => navigate("/chat")}>Начать</button>
        </div>
    </div>
  )
}

export default ChatBotBanner    