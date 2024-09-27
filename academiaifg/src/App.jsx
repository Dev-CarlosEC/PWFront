import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workout from './pages/Workout';
import PrivateRoute from './components/PrivateRoute';
import "./App.css";

/**
 * The main App component, which renders the main Routes for the application.
 * This component is the root of the component tree.
 * @returns {JSX.Element} The rendered App component.
 * @example
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './App';
 * ReactDOM.render(
 *     <React.StrictMode>
 *         <App />
 *     </React.StrictMode>,
 *     document.getElementById('root')
 * );
 */
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={
          <PrivateRoute>
            <Workout />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;
