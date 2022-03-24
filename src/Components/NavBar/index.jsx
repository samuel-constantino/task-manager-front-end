import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/auth';

export default function NavBar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate('/create');
  };

  return (
    <Box sx={ { flexGrow: 1, height: '12vh' } }>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
            Gerenciador de Tarefas
          </Typography>
          <Button color="inherit" onClick={ handleAddTask }>
            <AddIcon />
          </Button>
          <Button color="inherit" onClick={ logout }>Sair</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
