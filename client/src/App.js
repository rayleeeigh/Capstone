import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import Grades from './pages/Grades';
import Schedule from './pages/Schedule';
import AdminStudents from './pages/AdminStudents';
import AccountVerifications from './pages/AccountVerifications';
import LoginTrail from './pages/LoginTrail';
import RegisterSample from './pages/RegisterSample';
import SignUp from './pages/SignUp'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<RegisterSample />} />
          <Route path="/admin/accountverification" element={<AccountVerifications />}/>
          <Route path="/admin/logintrail" element={<LoginTrail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/grades' element={<Grades />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/admin/students' element={<AdminStudents />} />
        </Routes>
      </BrowserRouter>
  );
}
