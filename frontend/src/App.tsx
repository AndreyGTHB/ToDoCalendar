import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/auth/LoginComponent/LoginComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
}

export default App;
