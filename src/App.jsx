import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routers } from "./app/routers";
import AuthProvider from './context/AuthContext.jsx' 
import './App.css'; 

function App() {
  
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routers} />
      </AuthProvider>
    </>
  )
}

export default App;