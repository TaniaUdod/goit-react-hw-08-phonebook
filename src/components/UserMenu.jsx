import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box textAlign="center" margin="10px 0">
      <p
        style={{
          color: '#1b1db3',
          paddingBottom: '10px',
        }}
      >
        Welcome, {user.name}
      </p>
      <Button
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon sx={{ marginRight: 1 }} /> Logout
      </Button>
    </Box>
  );
};
