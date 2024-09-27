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

  /**
   * Função assíncrona que lida com o envio do formulário de login.
   * @param {React.FormEvent<HTMLFormElement>} e - Evento de formulário.
   * @returns {Promise<void>}
   *
   * Primeiramente, previne o comportamento padrão do formulário.
   * Verifica se os campos CPF e password estão preenchidos.
   * Faz uma requisição POST para /api/token/ com os dados do formulário.
   * Se a requisição for bem-sucedida, chama a função login e redireciona para a página de treino.
   * Em caso de erro, define uma mensagem de erro.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (CPF === '') { // se necessario add password 
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
