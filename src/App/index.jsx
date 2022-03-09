import React from 'react';
import Router from '../Router/index';
import { AuthProvider } from '../Contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
