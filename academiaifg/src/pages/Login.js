import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Login</button>
    </form>
  );
};
//22/09/2024 
/*
*
*Estrutura do Projeto:
Organizamos o projeto em pastas para componentes, páginas, estilos, contexto e hooks.
Configuração das Rotas:
Configuramos as rotas no arquivo App.js usando Routes e Route da biblioteca react-router-dom.
Contexto de Autenticação:
Criamos um contexto de autenticação (AuthContext.js) para gerenciar o estado do usuário.
Hook de Autenticação:
Criamos um hook (useAuth.js) para facilitar o uso do contexto de autenticação.
Páginas de Login e Registro:
Desenvolvemos as páginas de login e registro com formulários simples.
Estilos Globais:
Adicionamos estilos globais usando styled-components.
Proteção de Rotas:
Implementamos uma rota privada (PrivateRoute.js) para proteger componentes que requerem autenticação.
Feito por : Carlos e  Filipe 
*
*
*/
export default Login;
