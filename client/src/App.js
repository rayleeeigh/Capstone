import React, { createContext } from "react";
import "./App.css";
import AuthProvider from "./context/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavigationData from "./data/Navigations";
import Login from "./pages/Login";
import { Typography } from "@mui/material";
import Navigations from "./data/Navigations";
import Navbar from "./components/styled/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
