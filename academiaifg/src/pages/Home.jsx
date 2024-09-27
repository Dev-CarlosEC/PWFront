import React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';


/**
 * P gina principal da academia
 *
 * Mostra um menu de navega o com links para as p ginas de login, treino, sobre e contato.
 *
 * @returns {ReactElement} O componente da p gina principal
 */
const Home = () => {
  return (
    <>
      <GlobalStyles />

      {/* Header com t tulo da p gina */}
      <header>
        <h1>Bem-vindo à Academia IFG</h1>
      </header>

      {/* Menu de navega o */}
      <nav>
        <ul>
          {/* Link para a p gina de login */}
          <li><a href="#home">Home</a></li>

          {/* Link para a p gina de sobre */}
          <li><a href="#about">Sobre</a></li>

          {/* Link para a p gina de contato */}
          <li><a href="#contact">Contato</a></li>

          {/* Link para a p gina de login com React Router */}
          <li><Link to="/login">Login</Link></li>

          {/* Link para a p gina de treino com React Router */}
          <li><Link to="/workout">Treino</Link></li>
        </ul>
      </nav>

      {/* Se o  s se es */}
      <main>
        {/* Se o  home */}
        <section id="home">
          <h2>Home</h2>
          <p>Bem-vindo à nossa academia!</p>
        </section>

        {/* Se o  sobre */}
        <section id="about">
          <h2>Sobre</h2>
          <p>POS ENTREVISTAS AQUI HORARIO DE FUNCIONAMENTO</p>
        </section>

        {/* Se o  contato */}
        <section id="contact">
          <h2>Contato</h2>
          <p>EMAIL E NUMERO SE HOUVER</p>
        </section>
      </main>

      {/* Rodap  com o ano de copyright */}
      <footer>
        <p> 2024 CARLOS</p>
        <p> Todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default Home;
