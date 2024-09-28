import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';


/**
 * Componente que gerencia o formulário de registro
 * 
 * O formulário de registro tem os seguintes campos:
 * - user_id
 * - bodyFat
 * - gender
 * - age
 * - height
 * - weight
 * - chest_skinfold
 * - abdominal_skinfold
 * - thigh_skinfold
 * - subscapular_skinfold
 * - supra_iliac_skinfold
 * - medicalConditions
 * - takesMedication
 * 
 * @returns {JSX.Element} O formulário de registro
 */
const MedicalRecord = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    bodyFat: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    chest_skinfold: '',
    abdominal_skinfold: '',
    thigh_skinfold: '',
    subscapular_skinfold: '',
    supra_iliac_skinfold: '',
    medicalConditions: '',
    takesMedication: ''
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
      await api.post('/api/medicalrecord/', formData);
      navigate('/login');  // Redireciona para a página de login após o registro
    } catch (error) {
      setError('Erro ao registrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <>
      <GlobalStyles />
      <div className='MedicalRecord-container'>
        <h1>Preenchimento de formulário médico</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              placeholder="ID do Usuário"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="bodyFat"
              value={formData.bodyFat}
              onChange={handleChange}
              placeholder="Percentual de Gordura"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Gênero"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Idade"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Altura"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Peso"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="chest_skinfold"
              value={formData.chest_skinfold}
              onChange={handleChange}
              placeholder="Dobra Cutânea do Peito"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="abdominal_skinfold"
              value={formData.abdominal_skinfold}
              onChange={handleChange}
              placeholder="Dobra Cutânea do Abdômen"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="thigh_skinfold"
              value={formData.thigh_skinfold}
              onChange={handleChange}
              placeholder="Dobra Cutânea da Coxa"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="subscapular_skinfold"
              value={formData.subscapular_skinfold}
              onChange={handleChange}
              placeholder="Dobra Cutânea Subescapular"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="supra_iliac_skinfold"
              value={formData.supra_iliac_skinfold}
              onChange={handleChange}
              placeholder="Dobra Cutânea Supra-Ilíaca"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleChange}
              placeholder="Condições Médicas"
            />
          </div>
          <div className='MedicalRecord-container input'>
            <input
              type="text"
              name="takesMedication"
              value={formData.takesMedication}
              onChange={handleChange}
              placeholder="Toma Medicamentos"
            />
          </div>
          <button type="submit">Salvar Informações</button>
        </form>
        <button onClick={() => navigate('/')}>Voltar para Home</button> {/* Botão para voltar para a página inicial */}
      </div>
    </>
  );
};

export default MedicalRecord;