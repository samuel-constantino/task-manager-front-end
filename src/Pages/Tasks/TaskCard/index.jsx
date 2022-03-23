import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function TaskCard({ task }) {
  const { name, description, status } = task;
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
        <Button size="small">Done</Button>
      </CardActions>
    </Card>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object,
}.isRequired;
