import * as React from 'react';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Slidebar';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/images/logo.JPG';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 200;

const openedMixin = (theme) => ({
   width: drawerWidth,
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
});

const closedMixin = (theme) => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: 'nowrap',
   boxSizing: 'border-box',
   ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
   }),
}));

function DefaultLayout({ children }) {
   const [open, setOpen] = React.useState(false);

   const handleDrawer = () => {
      !open ? setOpen(true) : setOpen(false);
   };

   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const callBackSelected = (index) => {
      setSelectedIndex(index);
   };

   return (
      <Box sx={{ display: 'flex' }}>
         <AppBar position="fixed" color="inherit" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={2}>
            <Toolbar>
               <IconButton
                  color="inherit"
                  onClick={handleDrawer}
                  edge="start"
                  sx={{
                     marginRight: 2,
                  }}
               >
                  <MenuIcon />
               </IconButton>
               <Box
                  component="img"
                  sx={{
                     width: 160,
                  }}
                  alt="logo"
                  src={Logo}
               />
               <Box sx={{ width: `calc(100vw)` }}>
                  <Header handleClickItem={callBackSelected} />
               </Box>
            </Toolbar>
         </AppBar>
         <Drawer variant="permanent" open={open}>
            <Toolbar />
            <Sidebar selectedItem={selectedIndex} />
         </Drawer>
         <Box component="main" sx={{ flexGrow: 1, backgroundColor: grey[100], minHeight: `calc(100vh)` }}>
            <Toolbar />
            {children}
         </Box>
      </Box>
   );
}

export default DefaultLayout;
