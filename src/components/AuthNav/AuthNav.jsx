import { Box, Typography } from '@mui/material';
import { Link } from './AuthNav.styled';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
        <Link to="/register">
          Register
          <HowToRegIcon sx={{ marginLeft: 1 }} />
        </Link>
      </Typography>
      <Typography variant="h6" component="div">
        <Link to="/login">
          Log In
          <LoginIcon sx={{ marginLeft: 1 }} />
        </Link>
      </Typography>
    </Box>
  );
};
