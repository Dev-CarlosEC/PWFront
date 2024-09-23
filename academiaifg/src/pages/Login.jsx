import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import GlobalStyles from '../styles/GlobalStyles';

const Login = () => {
  const [CPF, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (CPF === '' || password === '') {
      setError('CPF e Senha são obrigatórios.');
      return;
    }
    login({ CPF, password });
    navigate('/');
  };

  return (
    <>
      <GlobalStyles />
      <div className='login-container'>
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='login-container input'>
            <input
              type="text"
              value={CPF}
              onChange={(e) => setCPF(e.target.value)}
              placeholder="CPF"
            />
          </div>
          <div className='login-container input'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
