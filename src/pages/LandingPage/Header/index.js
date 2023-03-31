import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';

function Header() {
   const color = grey[800];
   const size = '20px';

   const [state, setState] = React.useState(false);

   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const Item = styled(Typography)(({ theme }) => ({
      backgroundColor: theme.palette.mode === color,
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#fff',
      fontSize: '12px',
      alignSelf: 'center',
   }));

   return (
      <Stack
         direction="row"
         spacing={3}
         sx={{
            justifyContent: 'center',
            backgroundColor: color,
            Opacity: 1,
            position: 'fixed',
            zIndex: '9999',
            width: '100%',
         }}
      >
         <Item>
            <AppleIcon sx={{ fontSize: size }} />
         </Item>
         <Item>Store</Item>
         <Item>Mac</Item>
         <Item>iPad</Item>
         <Item>iPhone</Item>
         <Item>Watch</Item>
         <Item>AirPods</Item>
         <Item>TV & Home</Item>
         <Item>Entertainment</Item>
         <Item>Accessories</Item>
         <Item>Support</Item>
         <Item>
            <SearchIcon sx={{ fontSize: size }} />
         </Item>
         <Item>
            <LockIcon sx={{ fontSize: size }} />
         </Item>
      </Stack>
   );
}

export default Header;
