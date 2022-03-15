import React, { useState, useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { getTasksByUser } from '../../Services/api';

export default function Tasks() {
  const [tasks, setTasks] = useState(null);
  const { logout } = useContext(AuthContext);

  const getTasks = useCallback(async () => {
    const { data } = await getTasksByUser();
    console.log(data);
    setTasks(data);
  }, []);

  useEffect(() => getTasks(), [getTasks]);

  return (
    <>
      <nav>
        <h1>HOME PAGE</h1>
        <button type="button" onClick={ logout }>Logout</button>
      </nav>
      <div>
        {
          tasks ? tasks.map(({ name }) => (
            <p key={ name }>{ name }</p>
          )) : <h1>Loading...</h1>
        }
      </div>
    </>
  );
}
