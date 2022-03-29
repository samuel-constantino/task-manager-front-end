import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import {
  mainContainerPkg,
  boxLoginPkg,
  avatarPkg,
  titlePkg,
  boxFormPkg,
  nameFieldPkg,
  emailFieldPkg,
  passwordFieldPkg,
  buttonSubmitPkg,
} from './styles';

import {
  validateName,
  validateEmail,
  validatePassword,
} from '../../Helpers/validateForm';

import { registerUser } from '../../Services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const disabledBtn = !(validateName(name)
    && validateEmail(email)
    && validatePassword(password)
  );

  // const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(name, email, password);
    // navigate('/login');
  };

  return (
    <Container { ...mainContainerPkg }>
      <CssBaseline />

      <Box sx={ boxLoginPkg }>
        <Avatar sx={ avatarPkg }>
          <AccountCircle />
        </Avatar>

        <Typography { ...titlePkg }>Registrar</Typography>

        <Box { ...boxFormPkg } sx={ { mt: 1 } } onSubmit={ handleSubmit }>
          <TextField
            { ...nameFieldPkg }
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
          <TextField
            { ...emailFieldPkg }
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <TextField
            { ...passwordFieldPkg }
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <Button
            { ...buttonSubmitPkg }
            sx={ { mt: 3, mb: 2 } }
            disabled={ disabledBtn }
          >
            Registrar
          </Button>
        </Box>
      </Box>

    </Container>
  );
}
