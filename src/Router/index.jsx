import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Private from './private';
import Login from '../Pages/Login/index';
import Register from '../Pages/Register/index';
import Tasks from '../Pages/Tasks/index';
import AddTask from '../Pages/Tasks/AddTask/index';
import UpdateTask from '../Pages/Tasks/UpdateTask/index';
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
      <Route
        exact
        path="/:id"
        element={
          <Private>
            <UpdateTask />
          </Private>
        }
      />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
