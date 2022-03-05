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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={ {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <Avatar sx={ { m: 1, bgcolor: 'primary.main' } }>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={ handleSubmit } noValidate sx={ { mt: 1 } }>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoFocus
              value={ email }
              onChange={ ({ target }) => setEmail(target.value) }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              value={ password }
              onChange={ ({ target }) => setPassword(target.value) }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={ { mt: 3, mb: 2 } }
            >
              Entrar
            </Button>
            <Link href="/register" variant="body2">
              Não tem uma conta? Inscreva-se
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
