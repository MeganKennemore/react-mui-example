import { Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './PageRoutes';

function App() {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
}

export default App;
