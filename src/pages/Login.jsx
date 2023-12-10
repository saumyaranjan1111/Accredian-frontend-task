import React, { useState } from "react";
import {
  Box,
  Grid,
  Link,
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LoginIcon from "@mui/icons-material/Login";

import LoginValidation from "../components/LoginValidation";
import axios from 'axios'

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, seterrors] = useState({});
  const [backenderror, setbackenderror] = useState("");
  
  function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    seterrors(LoginValidation(formData));
    console.log(errors);

    if(isEmptyObject(errors)) {
      try {
        const response = await axios.post('https://login-backend-tro5.onrender.com/login', formData);
        navigate('/landingpage');
        console.log(response.data.welcomeMsg);
      } catch (error) {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        setbackenderror(error.response.data.message);
        console.log(error.response.data.message);
      }
    }

  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Login</Typography>
        <LoginIcon style={{ fontSize: 40 }}></LoginIcon>
        <form onSubmit={handleSubmit} style={{ width: "100%", marginTop: 20 }}>
          <TextField
            color="secondary"
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
          {errors && errors.email && <span style={{ color : 'red'}}>{errors.email}</span>}
          <TextField
            color="secondary"
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
          {errors && errors.password && <span style={{ color : 'red'}}>{errors.password}</span>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{ marginTop: 20 }}
          >
            Login
          </Button>

          {backenderror ? <span style ={{ color : 'red' }}>{backenderror}</span> : <span></span>}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value="remember"
                  size="small"
                  color="primary"
                />
              }
              label="Remember Me"
            />
          </FormGroup>

          <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/signup" color='primary' variant="body2">
                  {"Don't have an account? SignUp"}
                </Link>
              </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
