import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../../context/AuthContext';
import ApiInstance from '../../../api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await ApiInstance.post('/login', { email, password });
      if (response.data.token) {
        login(); // Set authentication state
        navigate('/users'); // Redirect to user management
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <h2>Login</h2>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      <Button type="submit" variant="primary">Login</Button>
    </Form>
  );
};

export default Login;
