import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import ApiInstance from '../../../api';
import './Login.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await ApiInstance.post('/api/login', { email, password });
      console.log(response);
      
      if (response.data.token) {
        login(); 
        navigate('/users'); 
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleLogin}>
        <h2 className="text-center">Login</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          Login
        </Button>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
