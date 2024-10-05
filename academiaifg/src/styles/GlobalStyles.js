import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 14px 20px;
    display: inline-block;
}

nav ul li a:hover {
    background-color: #111;
}

main {
    padding: 20px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
      
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

  .login-container input, .register-container input, .workout-container input, .MedicalRecord-container input, .Exercise-container input {
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
  }

  .login-container button:hover, .register-container button:hover, .workout-container button:hover, .MedicalRecord-container button:hover, .Exercise-container button:hover {
    background-color: #45a049;
  }

  .workout-container .exercise {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .workout-container .exercise img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .workout-container .exercise h2 {
    margin-top: 0;
  }

`;

export default GlobalStyles;
