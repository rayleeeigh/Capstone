import React from 'react';
import AuthProvider from './context/auth';
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

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/admin/accountverification"
            element={<AccountVerifications />}
          />
          <Route path="/admin/logintrail" element={<LoginTrail />} />
          {/* <Route
            path='/admin/accountverify'
            element={<AccountVerifications />}
          /> */}

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/admin/students" element={<AdminStudents />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
