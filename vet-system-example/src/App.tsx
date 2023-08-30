import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './PageRoutes';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <Box>
      <AppHeader />
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>   
    </Box>
  );
}

export default App;
