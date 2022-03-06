import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../Contexts/auth';

export default function Private({ children }) {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) return <h1>Carregando...</h1>;

  if (!authenticated) return <Navigate to="/login" />;
  return children;
}

Private.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
