import React from 'react';
import { render } from '@testing-library/react';
import { AuthProvider } from '../../Contexts/auth';

const renderWithContext = (component) => {
  return {
    ...render(
      <AuthProvider>
        { component }
      </AuthProvider>
    ),
  };
};

export default renderWithContext;
