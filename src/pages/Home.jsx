import React from 'react';
import { Typography, Button, Grid, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Typography variant='h4'>Welcome to Accredian</Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button component={Link} to="/login" style={{ color : 'white'}} variant="contained" color="primary">
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button component={Link} to="/signup" style={{ color : 'white'}} variant="contained" color="primary">
            Signup
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
