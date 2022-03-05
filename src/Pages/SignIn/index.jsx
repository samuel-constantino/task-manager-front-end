import React, { useState } from 'react';

// Material UI
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Link,
  Typography,
  Container,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  mainContainerPkg,
  boxLoginPkg,
  avatarPkg,
  titleLoginPkg,
  boxFormPkg,
  emailFieldPkg,
  passwordFieldPkg,
  buttonSubmitPkg,
} from './styles';

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <ThemeProvider theme={ theme }>
      <Container { ...mainContainerPkg }>
        <CssBaseline />

        <Box sx={ boxLoginPkg }>
          <Avatar sx={ avatarPkg }>
            <AccountCircle />
          </Avatar>

          <Typography { ...titleLoginPkg }> Entrar </Typography>

          <Box { ...boxFormPkg } sx={ { mt: 1 } } onSubmit={ handleSubmit }>
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
            <Button { ...buttonSubmitPkg } sx={ { mt: 3, mb: 2 } }> Entrar </Button>
            <Link href="/register" variant="body2">
              Não tem uma conta? Inscreva-se
            </Link>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
