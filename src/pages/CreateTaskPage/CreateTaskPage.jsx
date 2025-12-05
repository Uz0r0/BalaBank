import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import { useNavigate } from 'react-router-dom';
import styles from './CreateTaskPage.module.css';
import Header from '../../components/Header/Header';
import AvatarList from '../../components/AvatarList/AvatarList';
import Navigation from '../../components/Navigation/Navigation';
import parentProfileIcon from '../../assets/parent-profile-icon.jpg'; 

const users = [
    { id: 1, name: 'Аяна', avatarUrl: 'https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80', isSelected: false },
    { id: 2, name: 'Айсулуу', avatarUrl: 'https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80', isSelected: true }, 
    { id: 3, name: 'Эрмек', avatarUrl: 'https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80', isSelected: false },
];

const CreateTaskPage = () => {

    const dates = [
        { day: 'Пн', date: '24' },
        { day: 'Вт', date: '25' },
        { day: 'Ср', date: '26' },
        { day: 'Чт', date: '27' },
        { day: 'Пт', date: '28' },
        { day: 'Сб', date: '29' },
        { day: 'Вс', date: '30' },
    ];

    const [frequency, setFrequency] = useState('daily'); 
    const [selectedDate, setSelectedDate] = useState('27'); 

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskAmount, setTaskAmount] = useState(100);
    const { addTask } = useTasks();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskTitle.trim()) return;

        addTask({
            id: Date.now(),
            text: taskTitle,
            completed: false,
            amount: taskAmount, 
        });

        setTaskTitle('');
        setTaskDescription('');
        navigate('/parent');
    };

  return (
    <div className={styles.pageWrapper}>
        <Header 
            img={parentProfileIcon}
            userType='parent'
            content='5000.70'
        />
        <div className={styles.avatarSection}>
            <AvatarList users={users} userType='parent' />
        </div>

        <div className={styles.mainContainer}>
            <div className={styles.card}>
                <h1 className={styles.title}>Создать задание</h1>
                    <div>
                        <p className={styles.calendarMonth}>
                            Ноябрь 27, 2025
                        </p>
                        <div className={styles.calendarRow}>

                           {dates.map((item) => (
                                <div
                                    key={item.date}
                                    className={`${styles.dayItem} ${selectedDate === item.date ? styles.dayItemActive : ''}`}
                                    onClick={() => setSelectedDate(item.date)}
                                >
                                    <span className={`${styles.dayName} ${selectedDate === item.date ? styles.dayNameActive : ''}`}>{item.day}</span>
                                    <span className={`${styles.dayDate} ${selectedDate === item.date ? styles.dayDateActive : ''}`}>{item.date}</span>
                                </div>
                            ))}

                        </div>
                    </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
                    <div>
                        <label className={styles.inputLabel}>Название</label>
                        <input
                            type="text"
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Название задачи"
                            className={styles.styledInput}
                        />
                    </div>
                    <div>
                        <label className={styles.inputLabel}>Описание</label>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            placeholder="Название описания"
                            rows="3"
                            className={styles.styledTextarea}
                        />
                    </div>
                    <div className={styles.mb4}>
                        <label className={styles.inputLabel}>Награда</label>
                        <input
                            type="number"
                            value={taskAmount}
                            onChange={(e) => setTaskAmount(e.target.value)}
                            className={styles.styledInput}
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Создать задачу</button>
                </form>
            </div>  
        </div>
        <div className={styles.space100}></div>
        <Navigation />
    </div>
    
  );
};

export default CreateTaskPage;


