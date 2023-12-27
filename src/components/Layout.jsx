import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Loader } from './Loader/Loader';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { AppBar, Box, Toolbar, Typography, createSvgIcon } from '@mui/material';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home'
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#d9edf2d3' }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Box display="flex" alignItems="baseline">
                <NavLink
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: '#1b1db3',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  Home
                  <HomeIcon color="primary" sx={{ marginLeft: 1 }} />
                </NavLink>
              </Box>
            </Typography>
            {isLoggedIn && (
              <Typography variant="h5" component="div">
                <NavLink
                  to="/contacts"
                  style={{
                    textDecoration: 'none',
                    color: '#1b1db3',
                    marginRight: '40px',
                  }}
                >
                  Contacts
                </NavLink>
              </Typography>
            )}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
