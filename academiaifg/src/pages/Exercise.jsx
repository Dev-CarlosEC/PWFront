import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';

const Exercise = () => {
  const [formData, setFormData] = useState({
    pescoco: '',
    abdominais: '',
    adutores: '',
    biceps: '',
    costas_inferiores: '',
    costas_superiores: '',
    cardio: '',
    peito: '',
    gemeos: '',
    antebracos: '',
    gluteos: '',
    isquiotibiais: '',
    latissimos: '',
    quadriceps: '',
    ombros: '',
    triceps: '',
    trapezio: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  /**
   * Lida com a mudança de qualquer input no formulário.
   * 
   * @param {Event} e O evento de mudança do input.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Valida os dados do formulário antes de enviar.
   * 
   * @returns {boolean} Retorna true se a validação passar, caso contrário false.
   */
  const validateForm = () => {
    // Exemplo de validação simples: verificar se o campo 'pescoco' está preenchido
    if (!formData.pescoco.trim()) {
      setError('O campo ID do Usuário é obrigatório.');
      return false;
    }

    // Adicione mais validações conforme necessário
    // Por exemplo, verificar se os campos numéricos contêm apenas números
    const numericFields = [
      'abdominais',
      'adutores',
      'biceps',
      'costas_inferiores',
      'costas_superiores',
      'cardio',
      'peito',
      'gemeos',
      'antebracos',
      'gluteos',
      'isquiotibiais',
      'latissimos',
      'quadriceps',
      'ombros',
      'triceps',
      'trapezio',
    ];

    for (let field of numericFields) {
      if (formData[field] && isNaN(formData[field])) {
        setError(`O campo ${field} deve conter apenas números.`);
        return false;
      }
    }

    setError(''); // Limpa qualquer erro anterior
    return true;
  };

  /**
   * Lida com a submissão do formulário.
   * 
   * @param {Event} e O evento de submissão do formulário.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos dados do formulário
    if (!validateForm()) {
      return;
    }

    try {
      // Envia os dados para a API
      await api.post('/api/exercise/', formData);
      // Redireciona para a página desejada após o sucesso
      navigate('/dashboard'); // Altere para a rota apropriada
    } catch (error) {
      console.error('Erro ao registrar:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Erro ao registrar. Verifique os dados e tente novamente.');
      }
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className='Exercise-container'>
        <h1>Quantidade de Séries</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="pescoco"
              value={formData.pescoco}
              onChange={handleChange}
              placeholder="ID do Usuário"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="abdominais"
              value={formData.abdominais}
              onChange={handleChange}
              placeholder="Séries de Abdominais"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="adutores"
              value={formData.adutores}
              onChange={handleChange}
              placeholder="Adutores"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="biceps"
              value={formData.biceps}
              onChange={handleChange}
              placeholder="Bíceps"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="costas_inferiores"
              value={formData.costas_inferiores}
              onChange={handleChange}
              placeholder="Costas Inferiores"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="costas_superiores"
              value={formData.costas_superiores}
              onChange={handleChange}
              placeholder="Costas Superiores"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="cardio"
              value={formData.cardio}
              onChange={handleChange}
              placeholder="Tempo de Cardio (minutos)"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="peito"
              value={formData.peito}
              onChange={handleChange}
              placeholder="Peito"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="gemeos"
              value={formData.gemeos}
              onChange={handleChange}
              placeholder="Gêmeos"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="antebracos"
              value={formData.antebracos}
              onChange={handleChange}
              placeholder="Antebraços"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="gluteos"
              value={formData.gluteos}
              onChange={handleChange}
              placeholder="Glúteos"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="isquiotibiais"
              value={formData.isquiotibiais}
              onChange={handleChange}
              placeholder="Isquiotibiais"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="latissimos"
              value={formData.latissimos}
              onChange={handleChange}
              placeholder="Latíssimos"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="quadriceps"
              value={formData.quadriceps}
              onChange={handleChange}
              placeholder="Quadríceps"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="ombros"
              value={formData.ombros}
              onChange={handleChange}
              placeholder="Ombros"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="triceps"
              value={formData.triceps}
              onChange={handleChange}
              placeholder="Tríceps"
            />
          </div>
          <div className='Exercise-container input'>
            <input
              type="text"
              name="trapezio"
              value={formData.trapezio}
              onChange={handleChange}
              placeholder="Trapézio"
            />
          </div>
          <button type="submit">Salvar Informações</button>
        </form>
        <button onClick={() => navigate('/')}>Voltar para Home</button> {/* Botão para voltar para a página inicial */}
      </div>
    </>
  );
};

export default Exercise;
