import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthContext } from '../../Contexts/auth';

export default function ButtonAppBar() {
  const { logout } = useContext(AuthContext);

  return (
    <Box sx={ { flexGrow: 1, height: '12vh' } }>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            Gerenciador de Tarefas
          </Typography>
          <Button color="inherit" onClick={ logout }>Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
