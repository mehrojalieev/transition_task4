import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './components/Auth/Register';
import { Container } from 'react-bootstrap';
import Login from './pages/auth/login/Login';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/auth/register/Register';
import UserTable from './components/user-table/UserTable';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<UserTable />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
