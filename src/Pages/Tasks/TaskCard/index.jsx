import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { removeTask, editTask } from '../../../Services/api';

export default function TaskCard({ task, getTasks }) {
  const { id, name, description, status } = task;

  const handleCancel = (taskId) => {
    removeTask(taskId);
    getTasks();
  };

  const handleEdit = (taskId) => {
    editTask(taskId);
    getTasks();
  };

  return (
    <Card sx={ { minWidth: 275 } }>
      <CardContent>
        <Typography variant="h5" component="div">
          { name }
        </Typography>
        <Typography sx={ { mb: 1.5 } } color="text.secondary">
          { status }
        </Typography>
        <Typography variant="body2">
          { description }
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Feito</Button>
        <Button
          size="small"
          id={ id }
          onClick={ ({ target }) => handleEdit(target.id) }
        >
          Editar
        </Button>
        <Button
          size="small"
          id={ id }
          onClick={ ({ target }) => handleCancel(target.id) }
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object,
}.isRequired;
