import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../redux/auth/operations';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const userEmail = form.elements.email.value;
    const userPassword = form.elements.password.value;

    dispatch(logIn({ email: userEmail, password: userPassword }));

    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <TextField
        label="Email"
        id="outlined-start-adornment"
        type="email"
        name="email"
        placeholder="Enter email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Please enter a valid email address."
        sx={{ m: 1, width: '40ch' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        autoComplete="off"
        required
      />
      <FormControl sx={{ m: 1, width: '40ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          title="Password must contain at least one number, one uppercase and lowercase letter, and at least eight or more characters."
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          autoComplete="off"
          required
        />
      </FormControl>
      <Button type="submit" variant="contained" sx={{ padding: '12px 60px' }}>
        Log In
        <LoginIcon
          sx={{ marginLeft: 1, display: 'inline-flex', alignItems: 'center' }}
        />
      </Button>
      <Typography paragraph={true} sx={{ marginTop: '12px' }}>
        Don't have an account yet?{' '}
        <NavLink to="/register">
          <Button variant="outlined">Register</Button>
        </NavLink>
      </Typography>
    </Box>
  );
};
