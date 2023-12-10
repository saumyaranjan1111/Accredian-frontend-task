import React, { useState, useEffect } from 'react'
import { Box, Grid, Link, TextField, Button, Container, Paper, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SignupValidation from '../components/SignupValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  
  const [backenderror, setbackenderror] = useState("");
  const [frontenderror, setfrontenderror] = useState({});

  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationerrors = await SignupValidation(formData);
    console.log(validationerrors);

    if (isEmptyObject(validationerrors)) {
      try {
        const response = await axios.post('https://login-backend-tro5.onrender.com/signup', formData);
        console.log(validationerrors);

        navigate('/landingpage');
        console.log(response.data.message);

      } catch (error) {
        console.error('Signup failed:', error.response ? error.response.data : error.message);
        setbackenderror(error.response.data.message);
        console.log(error.response.data.message);
      }
    } else {
      setfrontenderror(validationerrors);
    }
  };

  return (
    <Container component='main' maxWidth='sm'>
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4">Signup</Typography>
        <PersonAddAlt1Icon style={ {fontSize : 40} }></PersonAddAlt1Icon>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 20 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                color='secondary'
                variant="outlined"
                margin="normal"
                fullWidth
                id="fname"
                label="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color='secondary'
                variant="outlined"
                margin="normal"
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
            
          <TextField
                color='secondary'
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {frontenderror.email && <span style = {{color : 'red'}}>{frontenderror.email}</span>}
          <TextField

color='secondary'

            variant="outlined"
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <TextField

color='secondary'

            variant="outlined"
            margin="normal"
            fullWidth
            id="confirmpassword"
            label="Confirm Password"
            name="confirmpassword"
            type="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
          {frontenderror.password && <span style={{color : 'red'}}>{frontenderror.password}</span>}
          {formData.password !== formData.confirmpassword && (<span style = {{ color : 'red' }}>{"Passwords don't match"}</span>)}

          {/* if there exists an error from the backend then overwrite the error message being shown below to be the one that is coming from the backend and not the "password does not match" one */}
          {!backenderror 
          ? 
          formData.password && formData.confirmpassword && formData.password === formData.confirmpassword && (<span style = {{ color : 'green'}}>{"Password matches"}</span>)
          : 
          (<span style={{ color : 'red'}}>{backenderror}</span>)
          }

          <Button type="submit" fullWidth variant="contained" color="secondary" style={{ marginTop: 20 }}>
            Signup
          </Button>

          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked value='remember' size='small' color='secondary'/>} label="Remember Me" />
          </FormGroup>

          <Grid container>
              <Grid item>
                <Link component={ RouterLink } to="/login" color='primary' variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>  
  )
}

export default Signup