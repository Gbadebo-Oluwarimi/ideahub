import React from 'react';
import './App.css';
import {  Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/authRoutes/ResetPassword.jsx';
import Dashboard from './pages/Dashboard';
import AuthRoutes from './utils/AuthRoutes';
import PublicRoutes from './utils/PublicRoutes';

function App() {
  return (
      <Routes>
        <Route element={<PublicRoutes/>}>
            <Route element={<Login/>} path="/"/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
        </Route>
        <Route element={<AuthRoutes/>}>
             <Route path="/Dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
  
  );
}

export default App;
