import './App.scss';
import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import serviceStore from "./services/data/serviceStore";

function App() {
    return (
        <div className="App">
            <NavLink to="/home">Home</NavLink>
            <Routes>
                <Route path="/home" element={<h1>Authenticated: {serviceStore.userService.authenticated ? "true" : "false"}</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
}

export default App;
