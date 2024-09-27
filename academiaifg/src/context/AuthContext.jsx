import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

  /**
   * The AuthProvider component provides an AuthContext to its children.
   * It checks local storage for stored user data and token, and sets the
   * corresponding state variables if they exist. It also provides functions
   * for logging in and out, which update the state variables and local
   * storage accordingly.
   *
   * @param {Object} props - The component props.
   * @param {Node} props.children - The children of the component.
   */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(JSON.parse(storedToken));
    }
  }, []);

  /**
   * Log in the user.
   *
   * This function will set the user and token states to the given data, and
   * store the corresponding items in local storage.
   *
   * @param {Object} userData - The user data returned by the backend. This
   * object should contain an "access" property with the JWT to be used for
   * authentication.
   */
  const login = (userData) => {
    setUser(userData);
    setToken(userData.access);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', JSON.stringify(userData.access));
  };

  /**
   * Log out the user.
   *
   * This function will clear the user and token states, and remove the
   * corresponding items from local storage.
   */
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
