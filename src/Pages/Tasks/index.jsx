import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Tasks() {
  const tasks = [
    { name: 'task 1', number: 1 },
    { name: 'task 2', number: 2 },
    { name: 'task 3', number: 3 },
  ];
  return (
    <div style={ { display: 'flex' } }>
      <nav
        style={ {
          borderRight: 'solid 1px',
          padding: '1rem',
        } }
      >
        {
          tasks.map((task) => (
            <NavLink
              style={ ({ isActive }) => ({
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              }) }
              to={ `/tasks/${task.number}` }
              key={ task.number }
            >
              { task.name }
            </NavLink>
          ))
        }
      </nav>
      <Outlet />
    </div>
  );
}
