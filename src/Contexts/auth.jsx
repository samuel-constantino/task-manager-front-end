import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log('login', { email, password });
    if (password === '123') {
      setUser({ id: '123', email });
      navigate('/');
    }
  };

  const logout = () => {
    console.log('logout');
    setUser(null);
    navigate('/login');
  };

  const infos = {
    authenticated: !!user,
    user,
    login,
    logout,
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
