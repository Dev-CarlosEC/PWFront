// src/components/MedicalRecord.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
`;

const LoadingIcon = styled(FaSpinner)`
  margin-right: 0.5rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const MedicalRecord = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //usando Yup
  const validationSchema = Yup.object().shape({
    user_id: Yup.string()
      .required('ID do Usuário é obrigatório')
      .matches(/^\d+$/, 'ID do Usuário deve conter apenas números'),
    bodyFat: Yup.number()
      .typeError('Percentual de Gordura deve ser um número')
      .required('Percentual de Gordura é obrigatório')
      .min(0, 'Percentual de Gordura não pode ser negativo')
      .max(100, 'Percentual de Gordura não pode exceder 100'),
    gender: Yup.string()
      .required('Gênero é obrigatório')
      .oneOf(['Masculino', 'Feminino', 'Outro'], 'Selecione um gênero válido'),
    age: Yup.number()
      .typeError('Idade deve ser um número')
      .required('Idade é obrigatória')
      .min(0, 'Idade não pode ser negativa')
      .max(120, 'Idade não pode exceder 120'),
    height: Yup.number()
      .typeError('Altura deve ser um número')
      .required('Altura é obrigatória')
      .min(0, 'Altura não pode ser negativa'),
    weight: Yup.number()
      .typeError('Peso deve ser um número')
      .required('Peso é obrigatório')
      .min(0, 'Peso não pode ser negativo'),
    chest_skinfold: Yup.number()
      .typeError('Dobra Cutânea do Peito deve ser um número')
      .required('Dobra Cutânea do Peito é obrigatória')
      .min(0, 'Dobra Cutânea do Peito não pode ser negativa'),
    abdominal_skinfold: Yup.number()
      .typeError('Dobra Cutânea do Abdômen deve ser um número')
      .required('Dobra Cutânea do Abdômen é obrigatória')
      .min(0, 'Dobra Cutânea do Abdômen não pode ser negativa'),
    thigh_skinfold: Yup.number()
      .typeError('Dobra Cutânea da Coxa deve ser um número')
      .required('Dobra Cutânea da Coxa é obrigatória')
      .min(0, 'Dobra Cutânea da Coxa não pode ser negativa'),
    subscapular_skinfold: Yup.number()
      .typeError('Dobra Cutânea Subescapular deve ser um número')
      .required('Dobra Cutânea Subescapular é obrigatória')
      .min(0, 'Dobra Cutânea Subescapular não pode ser negativa'),
    supra_iliac_skinfold: Yup.number()
      .typeError('Dobra Cutânea Supra-Ilíaca deve ser um número')
      .required('Dobra Cutânea Supra-Ilíaca é obrigatória')
      .min(0, 'Dobra Cutânea Supra-Ilíaca não pode ser negativa'),
    medicalConditions: Yup.string()
      .required('Condições Médicas são obrigatórias'),
    takesMedication: Yup.string()
      .required('Informação sobre medicação é obrigatória')
      .oneOf(['Sim', 'Não'], 'Selecione uma opção válida'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  /**
   * Lida com a submissão do formulário.
   * 
   * @param {Object} data Os dados do formulário.
   */
  const onSubmit = async (data) => {
    setServerError('');
    setSuccessMessage('');
    setIsLoading(true);
    try {
      const response = await api.post('/api/medicalrecord/', data);
      setSuccessMessage('Registro médico salvo com sucesso!');
      reset(); // Limpa o formulário
      // Opcional: redirecionar após um tempo
      setTimeout(() => navigate('/dashboard'), 2000); // Redireciona após 2 segundos
    } catch (error) {
      console.error('Erro ao registrar:', error);
      if (error.response && error.response.data && error.response.data.detail) {
        setServerError(error.response.data.detail);
      } else {
        setServerError('Erro ao registrar. Verifique os dados e tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1>Preenchimento de Formulário Médico</h1>
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          {serverError && <ErrorMessage>{serverError}</ErrorMessage>}

          <InputGroup>
            <Label htmlFor="user_id">ID do Usuário</Label>
            <Input
              type="text"
              id="user_id"
              placeholder="ID do Usuário"
              {...register('user_id')}
              aria-invalid={errors.user_id ? 'true' : 'false'}
            />
            {errors.user_id && <ErrorMessage>{errors.user_id.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="bodyFat">Percentual de Gordura (%)</Label>
            <Input
              type="number"
              id="bodyFat"
              placeholder="Percentual de Gordura"
              {...register('bodyFat')}
              aria-invalid={errors.bodyFat ? 'true' : 'false'}
            />
            {errors.bodyFat && <ErrorMessage>{errors.bodyFat.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="gender">Gênero</Label>
            <Select
              id="gender"
              {...register('gender')}
              aria-invalid={errors.gender ? 'true' : 'false'}
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </Select>
            {errors.gender && <ErrorMessage>{errors.gender.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="age">Idade</Label>
            <Input
              type="number"
              id="age"
              placeholder="Idade"
              {...register('age')}
              aria-invalid={errors.age ? 'true' : 'false'}
            />
            {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="height">Altura (cm)</Label>
            <Input
              type="number"
              id="height"
              placeholder="Altura"
              {...register('height')}
              aria-invalid={errors.height ? 'true' : 'false'}
            />
            {errors.height && <ErrorMessage>{errors.height.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="weight">Peso (kg)</Label>
            <Input
              type="number"
              id="weight"
              placeholder="Peso"
              {...register('weight')}
              aria-invalid={errors.weight ? 'true' : 'false'}
            />
            {errors.weight && <ErrorMessage>{errors.weight.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="chest_skinfold">Dobra Cutânea do Peito (mm)</Label>
            <Input
              type="number"
              id="chest_skinfold"
              placeholder="Dobra Cutânea do Peito"
              {...register('chest_skinfold')}
              aria-invalid={errors.chest_skinfold ? 'true' : 'false'}
            />
            {errors.chest_skinfold && <ErrorMessage>{errors.chest_skinfold.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="abdominal_skinfold">Dobra Cutânea do Abdômen (mm)</Label>
            <Input
              type="number"
              id="abdominal_skinfold"
              placeholder="Dobra Cutânea do Abdômen"
              {...register('abdominal_skinfold')}
              aria-invalid={errors.abdominal_skinfold ? 'true' : 'false'}
            />
            {errors.abdominal_skinfold && <ErrorMessage>{errors.abdominal_skinfold.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="thigh_skinfold">Dobra Cutânea da Coxa (mm)</Label>
            <Input
              type="number"
              id="thigh_skinfold"
              placeholder="Dobra Cutânea da Coxa"
              {...register('thigh_skinfold')}
              aria-invalid={errors.thigh_skinfold ? 'true' : 'false'}
            />
            {errors.thigh_skinfold && <ErrorMessage>{errors.thigh_skinfold.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="subscapular_skinfold">Dobra Cutânea Subescapular (mm)</Label>
            <Input
              type="number"
              id="subscapular_skinfold"
              placeholder="Dobra Cutânea Subescapular"
              {...register('subscapular_skinfold')}
              aria-invalid={errors.subscapular_skinfold ? 'true' : 'false'}
            />
            {errors.subscapular_skinfold && <ErrorMessage>{errors.subscapular_skinfold.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="supra_iliac_skinfold">Dobra Cutânea Supra-Ilíaca (mm)</Label>
            <Input
              type="number"
              id="supra_iliac_skinfold"
              placeholder="Dobra Cutânea Supra-Ilíaca"
              {...register('supra_iliac_skinfold')}
              aria-invalid={errors.supra_iliac_skinfold ? 'true' : 'false'}
            />
            {errors.supra_iliac_skinfold && <ErrorMessage>{errors.supra_iliac_skinfold.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="medicalConditions">Condições Médicas</Label>
            <TextArea
              id="medicalConditions"
              placeholder="Descreva suas condições médicas"
              rows="4"
              {...register('medicalConditions')}
              aria-invalid={errors.medicalConditions ? 'true' : 'false'}
            />
            {errors.medicalConditions && <ErrorMessage>{errors.medicalConditions.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="takesMedication">Toma Medicamentos</Label>
            <Select
              id="takesMedication"
              {...register('takesMedication')}
              aria-invalid={errors.takesMedication ? 'true' : 'false'}
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>
            {errors.takesMedication && <ErrorMessage>{errors.takesMedication.message}</ErrorMessage>}
          </InputGroup>

          <Button type="submit" disabled={isLoading}>
            {isLoading && <LoadingIcon />}
            {isLoading ? 'Salvando...' : 'Salvar Informações'}
          </Button>
        </Form>
        <Button
          type="button"
          onClick={() => navigate('/')}
          style={{ marginTop: '1rem', backgroundColor: '#6c757d' }}
        >
          Voltar para Home
        </Button>
      </Container>
    </>
  );
};

export default MedicalRecord;
