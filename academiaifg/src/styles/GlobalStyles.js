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
.login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.login-container h2 {
    margin-bottom: 20px;
}

.login-container label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
}

.login-container input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

.login-container button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.login-container button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
    margin-top: 10px;
}

`;

export default GlobalStyles;
