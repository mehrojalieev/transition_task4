import  { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login data submitted:", formData);
  };

  return (
    <div className="login-form">
      <h2 className="login-form__title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form__group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-form__group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-form__submit">
          Login
        </button>
      </form>
      <p className="form__bottom-text">Don't have an account? <Link to="/auth/register">Register</Link></p>
    </div>
  );
};

export default Login;
