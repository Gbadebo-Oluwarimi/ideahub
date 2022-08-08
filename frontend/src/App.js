import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/authRoutes/ResetPassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="/reset-password/:id/:token" element={<ResetPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
