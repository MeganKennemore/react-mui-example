import { Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from "@mui/material";
import "./pages-css/Login.css";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginAttempted } from "../util/LoginHelper";
import { filterUsersByUsername } from "../api/UsersApi";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectLoggedIn, setLoggedIn, setLoggedInUser } from "../features/app/AppSlice";
import history from "history/browser";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { login } from "../features/app/AppActions";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [invalidUserError, setInvalidUserError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector(selectLoggedIn);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onUserNameChange = (event: any) => {
    if (event.target.value === "") {
      setUserNameError(true);
    } else if (userNameError) {
      setUserNameError(false);
    }
    setUserName(event.target.value);
  };

  const onPasswordChange = (event: any) => {
    if (event.target.value === "") {
      setPasswordError(true);
    } else if (passwordError) {
      setPasswordError(false);
    }
    setPassword(event.target.value);
  }

  const isButtonDisabled = () => {
    if (userName !== "" && password !== "") {
      return false;
    }
    return true;
  };

  const onSubmit = (e: any) => {
/*     const filteredUsers = filterUsersByUsername(userName);
  if (filteredUsers.length === 0 || filteredUsers.length > 1) {
    setInvalidUserError(true);
  } else if (filteredUsers[0].username === userName && filteredUsers[0].password === password) {
    dispatch(setLoggedInUser(filteredUsers[0])).then(() =>{
      dispatch(setLoggedIn()).then(() =>
        setInvalidUserError(false);
        navigate("/home");
        window.location.reload();
      })
    })
  } else {
    setInvalidUserError(true);
  } */
  e.preventDefault();
  dispatch(login(userName, password)).then(() => {
    //navigate("/home").then(() => {

   // });
    //window.location.reload();
    //history.push("/home").then(())
    navigate("/home");
    //window.location.reload();
  })
  .catch(() => {
    setInvalidUserError(true);
  });
  /* if (!val) {
    
  } else {
    setInvalidUserError(false);
  }
}) */
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, paddingTop: 6, width: { sm: `calc(100% - 240px)` } }}>
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
          {(userNameError || passwordError) && (
            <Grid item>
              <Typography variant="caption" color="error">
                {userNameError && "Username"}{(userNameError && passwordError) && " and "}{passwordError && "Password"} {userNameError && passwordError ? "are" : "is"} required!
              </Typography>
            </Grid>
          )}
          {invalidUserError && (
            <Grid item>
              <Typography variant="caption" color="error">
                The username or password does not match our records
              </Typography>
            </Grid>
          )}
          <Grid item>
            <TextField 
              label={"Username"} 
              variant="outlined" 
              type="text"
              value={userName}
              error={userNameError}
              fullWidth
              required
              onChange={onUserNameChange}
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined" required fullWidth>
              <InputLabel htmlFor="password" error={passwordError}>Password</InputLabel>
              <OutlinedInput 
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                error={passwordError}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
                onChange={onPasswordChange}
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Button 
              variant="contained"
              fullWidth 
              disabled={isButtonDisabled()}
              onClick={onSubmit}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
};

export default Login;