import { useEffect, useState } from "react";
import Menu from "./Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useLocation } from "react-router-dom";

interface AppHeaderProps {
  showBack?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const { showBack } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState("none");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login" && display !== "none") {
      setDisplay("none");
    } else if (pathname !== "/login" && display === "none") {
      setDisplay("block");
    }
  }, [pathname])

  return (
    <>
      {/** Main Header */}
      <Box sx={{ flexGrow: 1 }} style={{ display: display }}>
        <AppBar 
          position="fixed"
          sx={{
            width: { md: `calc(100% - 240px)` },
            ml: { md: `240px` },
          }}
        >
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' }  }}
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
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} display={display}/>
    </>
  )
};

export default AppHeader;