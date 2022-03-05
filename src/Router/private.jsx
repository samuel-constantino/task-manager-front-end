import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../Contexts/auth';

export default function Private({ children }) {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) return <Navigate to="/login" />;
  return children;
}

Private.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
