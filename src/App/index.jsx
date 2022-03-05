import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/login">Login</Link>
        { ' ' }
        <Link to="/register">Register</Link>
        { ' ' }
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Outlet />
    </div>
  );
}
