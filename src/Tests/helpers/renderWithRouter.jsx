import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { AuthProvider } from '../../Contexts/auth';

export const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <BrowserRouter history={ history }>
        <AuthProvider>
          { component }
        </AuthProvider>
      </BrowserRouter>),
      history,
  });
};
