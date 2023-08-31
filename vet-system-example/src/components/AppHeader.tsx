import { useState } from "react";
import Menu from "./Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface AppHeaderProps {
  showBack?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { showBack } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/** Main Header */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            {!!showBack && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="back-button"
                sx={{ mr: 2 }}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {/* {title} */}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/**side drawer w/ Menu */}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
};

export default AppHeader;