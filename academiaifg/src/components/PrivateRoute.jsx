import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

/**
 * This component renders the given children if the user is logged in.
 * If the user is not logged in, it redirects to /login.
 *
 * @param {ReactNode} children The content to render if the user is logged in.
 * @return {ReactElement} The rendered content.
 */
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
