import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    if (loggedUser) setUser(loggedUser);

    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (password === '123') {
      const loggedUser = { id: '123456', email, password };

      setUser(loggedUser);
      localStorage.setItem('user', JSON.stringify(loggedUser));

      navigate('/');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const infos = {
    authenticated: !!user,
    user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={ infos }>
      { children }
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
