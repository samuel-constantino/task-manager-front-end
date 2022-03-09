import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Private from './private';
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route exact path="/login" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
