import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';

/**
 * Componente que gerencia o formulário de registro
 * 
 * O formulário de registro tem os seguintes campos:
 * - CPF
 * - Senha
 * - Nome
 * - Telefone
 * - Objetivo
 * - Rua
 * - Linha de Endereço
 * - CEP
 * - Cidade
 * 
 * @returns {JSX.Element} O formulário de registro
 */
const Register = () => {
  const [formData, setFormData] = useState({
    cpf: '',
    password: '',
    name: '',
    phone: '',
    goal: '',
    street: '',
    address_line: '',
    cep: '',
    city: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  /**
   * Handles the change of any input in the registration form
   * 
   * @param {Event} e The event triggered by the input change
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  /**
   * Handles the form submission.
   * @param {Event} e The form submission event.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/register/', formData);
      navigate('/login');  // Redireciona para a página de login após o registro
    } catch (error) {
      setError('Erro ao registrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className='register-container'>
        <h1>Registro</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='register-container input'>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="CPF"
            />
          </div>
          <div className='register-container input'>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefone"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder="Objetivo"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Rua"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="address_line"
              value={formData.address_line}
              onChange={handleChange}
              placeholder="Linha de Endereço"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              placeholder="CEP"
            />
          </div>
          <div className='register-container input'>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Cidade"
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
        <button onClick={() => navigate('/')}>Voltar para Home</button> {/* Botão para voltar para a página inicial */}
      </div>
    </>
  );
};

export default Register;
