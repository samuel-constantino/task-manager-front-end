import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log('login', { email, password });
    setUser({ id: '123', email });
  };

  const logout = () => {
    console.log('logout');
  };

  const infos = {
    auth: !!user,
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
