import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
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
      <Grid container spacing={ { xs: 2, md: 3 } }>
        { tasks ? tasks.map((task) => {
          const { _id: id } = task;
          return (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ id }>
              <TaskCard key={ id } task={ task } />
            </Grid>
          );
        }) : <h1>Loading...</h1> }
      </Grid>
    </>
  );
}
