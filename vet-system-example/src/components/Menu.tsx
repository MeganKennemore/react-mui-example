import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PetsIcon from '@mui/icons-material/Pets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
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
}

const Menu: React.FC<MenuProps> = (props) => {
  const { isOpen, setIsOpen } = props;

  const toggleDrawer = (toggle: boolean) => () => {
    setIsOpen(toggle);
  };
  
  return (
    <Box
      component="nav"
      aria-label="menu-drawer"
    >
      <SwipeableDrawer
        anchor="left"
        variant="temporary"
        open={isOpen}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <div style={{ width: "100%", display: "inline-flex", justifyContent: "flex-end" }}>
          <IconButton 
            onClick={toggleDrawer(false)}
          >
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
        <List disablePadding>
          {menuItems.map((item, index) => {
            return (
              <ListItem key={`menu-item-${item.text}-${index}`} disablePadding>
                <ListItemButton component="a" href={item.url}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default Menu;