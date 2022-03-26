import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';

import { validateTask } from '../../../Helpers/validateForm';
import NavBar from '../../../Components/NavBar/index';
import RadioWrapper from '../../../Components/RadioWrapper/index';

import {
  mainContainerPkg,
  boxCreateTaskPkg,
  titleTaskPkg,
  boxFormPkg,
  nameFieldPkg,
  descriptionFieldPkg,
  buttonSubmitPkg,
} from './styles';

import { getTaskById, editTask } from '../../../Services/api';

export default function UpdateTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('In progress');
  const [important, setImportant] = useState(true);
  const [urgent, setUrgent] = useState(true);

  const navigate = useNavigate();
  const { id: taskId } = useParams();

  const getTask = useCallback(async () => {
    const { data: task } = await getTaskById(taskId);
    setName(task.name);
    setDescription(task.description);
    setStatus(task.status);
    setImportant(task.priority.important);
    setUrgent(task.priority.urgent);
  }, [taskId]);

  useEffect(() => getTask(), [getTask]);

  const disabledBtn = validateTask({
    name,
    description,
    status,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedTask = {
      id: taskId,
      name,
      description,
      status,
      priority: {
        important,
        urgent,
      },
    };

    editTask(updatedTask);
    navigate('/');
  };

  return (
    <>
      <NavBar />
      <Container { ...mainContainerPkg }>
        <CssBaseline />

        <Box sx={ boxCreateTaskPkg }>
          <Typography { ...titleTaskPkg }>Editar Tarefa</Typography>

          <Box { ...boxFormPkg } sx={ { mt: 1 } } onSubmit={ handleSubmit }>
            <TextField
              { ...nameFieldPkg }
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />
            <TextField
              { ...descriptionFieldPkg }
              value={ description }
              onChange={ ({ target }) => setDescription(target.value) }
            />
            <Typography>Status</Typography>
            <RadioWrapper
              buttonsInfo={ {
                defaultValue: status,
                setValue: setStatus,
                options: ['In progress', 'Done'],
                labels: ['Em Progresso', 'Feita'],
              } }
            />

            <Typography>Importância</Typography>
            <RadioWrapper
              buttonsInfo={ {
                defaultValue: important,
                setValue: setImportant,
                options: [false, true],
                labels: ['Baixa', 'Alta'],
              } }
            />

            <Typography>Urgência</Typography>
            <RadioWrapper
              buttonsInfo={ {
                defaultValue: urgent,
                setValue: setUrgent,
                options: [false, true],
                labels: ['Baixa', 'Alta'],
              } }
            />
            <Button
              { ...buttonSubmitPkg }
              sx={ { mt: 3, mb: 2 } }
              disabled={ disabledBtn }
            >
              Editar
            </Button>
          </Box>
        </Box>

      </Container>
    </>
  );
}
