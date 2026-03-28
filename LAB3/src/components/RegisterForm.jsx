import { useState } from "react";
import InputField from "./InputField";

//  Register Child Component
const RegisterForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setMessage({ type: "success", text: `Account created for ${fullName}! ✓` });
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-icon"></div>
        <h2>Create Account</h2>
        <p>Join us today — it's free</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Reusing Custom InputField Component */}
        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
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
          placeholder="Min. 6 characters"
          required
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Repeat your password"
          required
        />

        {message && (
          <div className={`alert alert-${message.type}`}>{message.text}</div>
        )}

        <button type="submit" className="btn-primary">Create Account</button>
      </form>

      <p className="switch-text">
        Already have an account?{" "}
        <button className="link-btn" onClick={onSwitch}>Sign in here</button>
      </p>
    </div>
  );
};

export default RegisterForm;
