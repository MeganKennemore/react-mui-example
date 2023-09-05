import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import PageRoutes from '../../PageRoutes';
import AppHeader from '../../components/AppHeader';
import { useAppSelector } from '../../store/hooks';
import { selectLoggedInUser } from './AppSlice';
import { useEffect } from 'react';

function App() {
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const navigate = useNavigate();
  const {pathname} = useLocation();
 
  useEffect(() => {
    if (loggedInUser === undefined && pathname !== "/login") {
      navigate("/login");
    }
  }, [loggedInUser])

  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader />
      <PageRoutes />
    </Box>
  );
}

export default App;
