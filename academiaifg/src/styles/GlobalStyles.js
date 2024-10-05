// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset de estilos */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #eef2f5;
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 1em 0;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
    background-color: #333;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav ul li {
    margin: 0 10px;
  }

  nav ul li a {
    color: white;
    padding: 14px 20px;
    display: block;
  }

  nav ul li a:hover {
    background-color: #111;
  }

  main {
    padding: 20px;
    min-height: 80vh; /* Para garantir que o footer fique na parte inferior */
  }

  footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
    margin-top: auto;
  }

  /* Containers para diferentes componentes */
  .login-container, .register-container, .workout-container, .MedicalRecord-container, .Exercise-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .login-container h1, .register-container h1, .workout-container h1, .MedicalRecord-container h1, .Exercise-container h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  .login-container input, .register-container input, .workout-container input, .MedicalRecord-container input, .Exercise-container input,
  .login-container select, .register-container select, .workout-container select, .MedicalRecord-container select, .Exercise-container select,
  .login-container textarea, .register-container textarea, .workout-container textarea, .MedicalRecord-container textarea, .Exercise-container textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .login-container button, .register-container button, .workout-container button, .MedicalRecord-container button, .Exercise-container button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-container button:hover, .register-container button:hover, .workout-container button:hover, .MedicalRecord-container button:hover, .Exercise-container button:hover {
    background-color: #45a049;
  }

  /* Estilos específicos para o container MedicalRecord */
  .MedicalRecord-container {
    max-width: 600px;
    padding: 25px;
    background-color: #eef2f5;
    margin-bottom: 20px;
    box-shadow: none;
    border: none;
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    nav ul {
      flex-direction: column;
      align-items: center;
    }

    nav ul li {
      margin: 5px 0;
    }

    main {
      padding: 10px;
    }
  }
`;

export default GlobalStyles;
