import React, { useContext,  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import About from './pages/About';
import Grades from './pages/Grades';
import Schedule from './pages/Schedule';
import Students from './pages/Admin/StudentPage';
import Teachers from './pages/Admin/TeacherPage';
import Subjects from './pages/Admin/SubjectPage';
import AccountVerifications from './pages/AccountVerifications';
import LoginTrail from './pages/LoginTrail';
import RegisterSample from './pages/RegisterSample';
import { AuthContext } from './context/auth';

export default function App() {

  const {user} = useContext(AuthContext);

  return (
    
      <BrowserRouter>
        <Routes>
         
          {/* <Box variant='h2'>Waly user</Box> */}
          <Route path="/" element={user?<Home />:<Login/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<RegisterSample />} />
          <Route path="/admin/accountverification" element={<AccountVerifications />}/>
          <Route path="/admin/logintrail" element={<LoginTrail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/subjects" element={<Subjects />} />
        </Routes>
      </BrowserRouter>
    
  );
}
