import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import useAuth from '../hooks/useAuth';
import GlobalStyles from '../styles/GlobalStyles';

const Login = () => {
  const [CPF, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (CPF === '' || password === '') {
      setError('CPF e Senha são obrigatórios.');
      return;
    }

    try {
      const response = await api.post('/api/token/', { CPF, password });
      const { access, refresh } = response.data;
      login({ CPF, access, refresh });
      navigate('/workout');  // Redireciona para a página de treino após o login
    } catch (error) {
      setError('Credenciais inválidas.');
    }
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
        <p></p>
        <button onClick={() => navigate('/')}>Voltar para Home</button> {/* Botão para voltar para a página inicial */}
      </div>
    </>
  );
};

export default Login;
