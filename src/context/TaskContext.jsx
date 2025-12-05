import React, { createContext, useContext, useState, useEffect } from 'react';
import booksIcon from '../assets/book.png';
import cribIcon from '../assets/Baby-Cot.png';
import trashIcon from '../assets/bin.png';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) return JSON.parse(saved);

    return [
      { id: 1, text: 'Выполнить домашнюю работу', completed: false, amount: 100, icon: booksIcon },
      { id: 2, text: 'Застелить кровать', completed: false, amount: 50, icon: cribIcon },
      { id: 3, text: 'Выбросить мусор', completed: true, amount: 50, icon: trashIcon },
    ];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks(prev => [...prev, task]);

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used within TaskProvider');
  return context;
};
