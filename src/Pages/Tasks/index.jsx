import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { getTasksByUser } from '../../Services/api';
import TaskCard from '../../Components/TaskCard';

export default function Tasks() {
  const [tasks, setTasks] = useState(null);
  const { logout } = useContext(AuthContext);

  useEffect(useCallback(async () => {
    const { data } = await getTasksByUser();
    setTasks(data);
  }), []);

  return (
    <>
      <nav>
        <h1>HOME PAGE</h1>
        <button type="button" onClick={ logout }>Logout</button>
      </nav>
      <div>
        {
          tasks ? tasks.map((task) => {
            const { _id: id } = task;
            return <TaskCard key={ id } task={ task } />;
          }) : <h1>Loading...</h1>
        }
      </div>
    </>
  );
}
