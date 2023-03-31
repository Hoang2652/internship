import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Avt from '../../assets/images/1.PNG';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import './index.css';

export default function Header(props) {
   const [open, setOpen] = React.useState(false);

   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const handleClickItem = () => {
      props.handleClickItem(0);
   };

   return (
      <Stack spacing={4} direction="row" sx={{ color: 'action.active', float: 'right' }}>
         <Badge color="primary" badgeContent={10} onClick={handleClickOpen}>
            <NotificationsNoneIcon sx={{ fontSize: 30 }} />
         </Badge>
         <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={Avt} sx={{ width: 30, height: 30 }} />
               </IconButton>
            </Tooltip>
            <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
            >
               <MenuItem>
                  <NavLink to="/admin/profile" className="nav-bar-link" onClick={handleClickItem}>
                     <Typography textAlign="center">Profile</Typography>
                  </NavLink>
               </MenuItem>
               <MenuItem>
                  <NavLink to="/home" className="nav-bar-link">
                     <Typography textAlign="center">Landing Page</Typography>
                  </NavLink>
               </MenuItem>
               <MenuItem>
                  <NavLink to="/login" className="nav-bar-link">
                     <Typography textAlign="center">Logout</Typography>
                  </NavLink>
               </MenuItem>
            </Menu>
         </Box>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogContent>
               <DialogContentText id="alert-dialog-description">This is Notification</DialogContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'center' }}>
               <Button onClick={handleClose} variant="contained">
                  Agree
               </Button>
            </DialogActions>
         </Dialog>
         <Box>
            <SettingsIcon sx={{ fontSize: 30 }} />
         </Box>
      </Stack>
   );
}
