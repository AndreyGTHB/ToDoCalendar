import './App.scss';
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm/LoginForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </div>
    );
}

export default App;
