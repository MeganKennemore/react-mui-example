

import { Box, Typography } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const defaultTheme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Typography>Hello</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
