import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import NotFound from '../Pages/NotFound/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}
