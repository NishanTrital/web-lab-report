import { useState } from "react";
import InputField from "./InputField";

// Login Child Component
const LoginForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }
    setMessage({ type: "success", text: `Welcome back, ${formData.email}! ✓` });
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-icon"></div>
        <h2>Sign In</h2>
        <p>Access your account</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/*  Reusing Custom InputField Component */}
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        {message && (
          <div className={`alert alert-${message.type}`}>{message.text}</div>
        )}

        <button type="submit" className="btn-primary">Sign In</button>
      </form>

      <p className="switch-text">
        Don't have an account?{" "}
        <button className="link-btn" onClick={onSwitch}>Register here</button>
      </p>
    </div>
  );
};

export default LoginForm;
