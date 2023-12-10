import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'

function Landing() {
    // const navigate = useNavigate();
    // function handleclick() {
    //     navigate('/');
    // }
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
        <Typography variant='h4'>
              Welcome Home!
        </Typography>
        <Button component={Link} to='/' variant='contained' color='primary' style={{ color : 'white'}}> Log Out! </Button>
      </Box>

    </>
  )
}

export default Landing