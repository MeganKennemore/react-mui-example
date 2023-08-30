import { Box, Button, Container, Grid, Paper, TextField, Theme, Typography } from "@mui/material";
import "./pages-css/Login.css";

const Login: React.FC = () => {

  return (
    <Container>
      <Paper elevation={3} variant="elevation" className="login-paper">
        <Box>
          <Typography
            gutterBottom
            variant="h3"
          >
            Login
          </Typography>
        </Box>
        <Grid container rowSpacing={2} direction={"column"} justifyContent={"space-evenly"} alignItems={"stretch"}>
          <Grid item>
            <TextField 
              label={"Username"} 
              variant="outlined" 
              type="email"
            />
          </Grid>
          <Grid item>
            <TextField 
              label={"Password"} 
              variant="outlined" 
              type="email"
            />
          </Grid>
          <Grid item>
            <Button href="/" variant="contained">Login</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
};

export default Login;