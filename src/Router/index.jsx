import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import { AuthProvider } from '../Contexts/auth';
import Private from './private';
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
      </AuthProvider>
    </BrowserRouter>
  );
}
