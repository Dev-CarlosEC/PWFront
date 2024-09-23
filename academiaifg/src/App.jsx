import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workout from './pages/Workout';
import PrivateRoute from './components/PrivateRoute';
import "./App.css";

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
