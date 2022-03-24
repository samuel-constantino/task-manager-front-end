import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';

import RadioWrapper from '../../../Components/RadioWrapper/index';

import {
  mainContainerPkg,
  boxCreateTaskPkg,
  titleTaskPkg,
  boxFormPkg,
  nameFieldPkg,
  descriptionFieldPkg,
  statusFieldPkg,
  buttonSubmitPkg,
} from './styles';

import { addTask } from '../../../Services/api';

export default function AddTask() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [importance, setImportance] = useState(true);
  const [urgence, setUrgence] = useState(true);
  // const disabledBtn = !(validateEmail(email) && validatePassword(password));

  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      name,
      description,
      status,
      priority: {
        importance,
        urgence,
      },
    };
    addTask(newTask);

    // navigate('/');
  };

  return (
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
          <TextField
            { ...statusFieldPkg }
            value={ status }
            onChange={ ({ target }) => setStatus(target.value) }
          />

          <Typography>Importância</Typography>
          <RadioWrapper
            buttonsInfo={ {
              defaultValue: importance,
              setValue: setImportance,
              options: [false, true],
              labels: ['Baixa', 'Alta'],
            } }
          />

          <Typography>Urgência</Typography>
          <RadioWrapper
            buttonsInfo={ {
              defaultValue: urgence,
              setValue: setUrgence,
              options: [false, true],
              labels: ['Baixa', 'Alta'],
            } }
          />
          <Button { ...buttonSubmitPkg } sx={ { mt: 3, mb: 2 } }>
            Criar
          </Button>
        </Box>
      </Box>

    </Container>
  );
}
