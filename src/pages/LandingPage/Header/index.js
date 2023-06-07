import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';
import DropdownMenu from './DropDownMenu.js';
import { ExploreMac, ShopMac, moreMac, ExploreIpad, ShopIpad, moreIpad } from '../constants.js';
import './index.css';

function Header({ changeOpacity }) {
   const [color, setColor] = useState(grey[800]);
   const [opacity, setOpacity] = useState(0.8);
   const size = '20px';

   const Item = styled(Typography)(({ theme }) => ({
      backgroundColor: theme.palette.mode === color,
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#fff',
      fontSize: '12px',
      alignSelf: 'center',
      marginLeft: '1.75rem',
   }));

   const menuItems1 = ['Item 1a', 'Item 1b', 'Item 1c'];
   const menuItems2 = ['aaaaa', 'Item 1b', 'Item 1c'];

   const listItem = [
      { name: 'Store', explore: menuItems1, shop: menuItems1, more: menuItems2 },
      { name: 'Mac', explore: ExploreMac, shop: ShopMac, more: moreMac },
      { name: 'iPad', explore: ExploreIpad, shop: ShopIpad, more: moreIpad },
      { name: 'iPhone', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'Watch', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'AirPods', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'TV & Home', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'Entertainment', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'Accessories', explore: menuItems1, shop: menuItems1, more: menuItems1 },
      { name: 'Support', explore: menuItems1, shop: menuItems1, more: menuItems1 },
   ];

   const handleHover = (isHovering) => {
      if (isHovering) {
         setColor(grey[900]);
         setOpacity(1);
         changeOpacity(true);
      } else {
         setColor(grey[800]);
         setOpacity(0.8);
         changeOpacity(false);
      }
   };

   return (
      <Stack
         direction="row"
         sx={{
            justifyContent: 'center',
            backgroundColor: color,
            backdropFilter: 'saturate(180%) blur(20px)',
            webkitBackdropFilter: 'saturate(180%) blur(20px)',
            position: 'fixed',
            zIndex: '99',
            width: '100%',
            opacity: opacity,
         }}
      >
         <Item>
            <AppleIcon sx={{ fontSize: size }} />
         </Item>

         {listItem.map((item, index) => {
            return (
               <React.Fragment key={index}>
                  <DropdownMenu
                     name={item.name}
                     explore={item.explore}
                     shop={item.shop}
                     more={item.more}
                     changeColor={handleHover}
                  ></DropdownMenu>
               </React.Fragment>
            );
         })}
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
