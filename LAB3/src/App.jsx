import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

// This is the Parent Component — manages which form is active using useState
function App() {
  const [isLogin, setIsLogin] = useState(true); // State management

  return (
    <div className="app-container">
      <div className="bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="brand">
        <span className="brand-logo">⬡</span>
        <span className="brand-name">LAB3 Auth</span>
      </div>

      <div className="tab-switcher">
        <button
          className={`tab ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tab ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      <div className="form-container">
        {/* Conditionally render child components based on parent state */}
        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitch={() => setIsLogin(true)} />
        )}
      </div>

      <footer className="footer">
        <p>LAB3 — React Components &amp; State Management Demo</p>
      </footer>
    </div>
  );
}

export default App;
