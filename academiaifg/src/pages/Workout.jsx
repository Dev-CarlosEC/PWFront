import React, { useEffect, useState } from 'react';
import api from '../services/api';
import GlobalStyles from '../styles/GlobalStyles';

const Workout = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await api.get('/api/exercises/');
        setExercises(response.data);
      } catch (error) {
        setError('Erro ao carregar os exercícios.');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <GlobalStyles />
      <div className='workout-container'>
        <h1>Treino</h1>
        {exercises.map((exercise) => (
          <div key={exercise.id} className='exercise'>
            <h2>{exercise.exercise_id.name}</h2>
            <img src={exercise.exercise_id.image} alt={exercise.exercise_id.name} />
            <p>Descrição: {exercise.exercise_id.description}</p>
            <p>Intervalo: {exercise.rest_time} segundos</p>
            <p>Séries: {exercise.sets}</p>
            <p>Repetições: {exercise.reps}</p>
            <p>Peso: {exercise.kg} kg</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Workout;
