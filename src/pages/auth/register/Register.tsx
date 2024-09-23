import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { Form, Button } from 'react-bootstrap';
import ApiInstance from '../../../api';
import './Register.scss';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
     const response =  await ApiInstance.post('/api/register', { name, email, password });
     console.log(response.data);
      navigate('/');
      response.data.user && navigate("/login") 
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-container">
      <Form className="register-form" onSubmit={handleRegister}>
        <h2 className="text-center">Register</h2>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>
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
          Register
        </Button>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
