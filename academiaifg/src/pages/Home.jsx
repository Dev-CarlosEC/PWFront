import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <header>
        <h1>Bem-vindo à Academia IFG</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/workout">Treino</Link></li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Bem-vindo à nossa academia!</p>
        </section>
        <section id="about">
          <h2>Sobre</h2>
          <p>POS ENTREVISTAS AQUI HORARIO DE FUNCIONAMENTO</p>
        </section>
        <section id="contact">
          <h2>Contato</h2>
          <p>EMAIL E NUMERO SE HOUVER</p>
        </section>
      </main>
      <footer>
        <p>© 2024 CARLOS</p>
      </footer>
    </>
  );
};

export default Home;
