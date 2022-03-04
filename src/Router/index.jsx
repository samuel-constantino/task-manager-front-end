import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Common
import Register from '../Pages/Register/index';
import Login from '../Pages/Login/index';
import NotFound from '../Pages/NotFound/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common */}
        <Route exact path="/register" element={ <Register /> } />
        <Route exact path="/login" element={ <Login /> } />

        {/* Default */}
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
