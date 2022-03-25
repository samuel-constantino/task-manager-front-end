import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';

import PropTypes from 'prop-types';

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

import { addTask } from '../../../Services/api';

export default function UpdateTask({
  taskName = '',
  taskDescription = '',
  taskStatus = 'In progress',
  taskImportant = true,
  taskUrgent = true,
}) {
  const [name, setName] = useState(taskName);
  const [description, setDescription] = useState(taskDescription);
  const [status, setStatus] = useState(taskStatus);
  const [important, setImportant] = useState(taskImportant);
  const [urgent, setUrgent] = useState(taskUrgent);

  const disabledBtn = validateTask({
    name,
    description,
    status,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name,
      description,
      status,
      priority: {
        important,
        urgent,
      },
    };

    addTask(newTask);
    navigate('/');
  };

  return (
    <>
      <NavBar />
      <Container { ...mainContainerPkg }>
        <CssBaseline />

        <Box sx={ boxCreateTaskPkg }>
          <Typography { ...titleTaskPkg }>Nova Tarefa</Typography>

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
              Criar
            </Button>
          </Box>
        </Box>

      </Container>
    </>
  );
}

UpdateTask.propTypes = {
  taskName: PropTypes.string,
  taskDescription: PropTypes.string,
  taskStatus: PropTypes.string,
  taskImportant: PropTypes.bool,
  taskUrgent: PropTypes.bool,
}.isRequired;
