import React, { useEffect } from 'react';
import { RouterProvider } from "react-router-dom";
import { routers } from "./app/routers";
import AuthProvider from './context/AuthContext.jsx';
import { TaskProvider } from './context/TaskContext';
import './index.css'; 

function App() {
    useEffect(() => {
        const updateVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        updateVh();
        window.addEventListener('resize', updateVh);

        return () => window.removeEventListener('resize', updateVh);
    }, []);

    useEffect(() => {
        const updateVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        updateVh();
        window.addEventListener('resize', updateVh);

        return () => {
            window.removeEventListener('resize', updateVh);
        };
    }, []);
      
    return (
       <>
         <AuthProvider>
            <TaskProvider>
                <RouterProvider router={routers} />
            </TaskProvider>
         </AuthProvider>
       </>
    )
}

export default App;