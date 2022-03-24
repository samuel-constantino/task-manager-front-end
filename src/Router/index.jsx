import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Private from './private';
import Login from '../Pages/Login/index';
import Tasks from '../Pages/Tasks/index';
import AddTask from '../Pages/Tasks/AddTask/index';
import NotFound from '../Pages/NotFound/index';

export default function Router() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Private>
            <Tasks />
          </Private>
        }
      />
      <Route
        exact
        path="/create"
        element={
          <Private>
            <AddTask />
          </Private>
        }
      />
      <Route exact path="/login" element={ <Login /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
