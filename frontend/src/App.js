import React from 'react';
import './App.css';
import {  Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/authRoutes/ResetPassword.jsx';
import Dashboard from './pages/Dashboard';
import AuthRoutes from './utils/AuthRoutes';
import PublicRoutes from './utils/PublicRoutes';
import Project from './pages/Project';
import { useSelector } from 'react-redux';
import Formpopup from '../src/components/dashboardComponent/Popups/Formpopup'
import Todopopup from './components/dashboardComponent/Popups/Todopopup';

function App() {

  const {form, todo} = useSelector((state) => state.formstate)
  return (
    <>
   {form && <Formpopup/>}
   {todo && <Todopopup/>}
      <Routes>
        <Route element={<PublicRoutes/>}>
            <Route element={<Login/>} path="/"/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
        </Route>
        <Route element={<AuthRoutes/>}>
             <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path='/:id/:title' element={<Project/>}/>
        </Route>
      </Routes>
      </>
  
  );
}

export default App;
