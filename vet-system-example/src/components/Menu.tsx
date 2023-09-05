import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectLoggedInUser } from "../features/app/AppSlice";
const menuItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    url: "/home",
  },
  {
    text: "Patients",
    icon: <PetsIcon />,
    url: "/patient-records",
  },
  {
    text: "Appointments",
    icon: <CalendarMonthIcon />,
    url: "",
  },
  {
    text: "Settings",
    icon: <SettingsIcon />,
    url: "/settings",
  },
  {
    text: "Logout",
    icon: <LogoutIcon />,
    url: "",
   },
];

interface MenuProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  display: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { isOpen, setIsOpen, display } = props;
  const theme = useTheme();
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const isLargerDevice = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const toggleDrawer = (toggle: boolean) => () => {
    setIsOpen(toggle);
  };
  
  return (
    <Box
      component="nav"
      aria-label="menu-drawer"
      sx={{ width: { xs: "100%", md: 240 }, flexShrink: { xs: 1000, md: 0 } }}
      style={{ display: display }}
    >
      <SwipeableDrawer
        anchor="left"
        variant={isLargerDevice? "permanent" : "temporary"}
        open={isLargerDevice ? true: isOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: {xs: "100%", md: 240 } },
        }}
      >
        <div style={{ width: "100%", display: "inline-flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography style={{ padding: theme.spacing(2), fontWeight: 500 }}>
            {loggedInUser?.first_name} {loggedInUser?.last_name}
          </Typography>
          <IconButton 
            onClick={toggleDrawer(false)}
            sx={{ mr: 2, display: { md: 'none' }  }}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
        <List disablePadding>
          {menuItems.map((item, index) => {
            return (
              <Link to={item.url} style={{ color: "inherit", textDecoration: "none" }}>
                <ListItem key={`menu-item-${item.text}-${index}`} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text}/>
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default Menu;