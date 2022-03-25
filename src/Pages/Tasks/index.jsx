import React, { useState, useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
import { getTasksByUser } from '../../Services/api';
import TaskCard from './TaskCard/index';
import NavBar from '../../Components/NavBar';

export default function Tasks() {
  const [tasks, setTasks] = useState(null);

  const getTasks = useCallback(async () => {
    const { data } = await getTasksByUser();
    setTasks(data);
  }, []);

  useEffect(() => getTasks(), [getTasks]);

  return (
    <>
      <NavBar />
      <Grid container spacing={ { xs: 2, md: 3 } }>
        { tasks ? tasks.map((task) => {
          const { _id: id } = task;
          return (
            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ id }>
              <TaskCard key={ id } task={ { id, ...task } } getTasks={ getTasks } />
            </Grid>
          );
        }) : <h1>Loading...</h1> }
      </Grid>
    </>
  );
}
