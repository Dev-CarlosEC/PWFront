import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
