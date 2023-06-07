import React, { useState } from 'react';
import { Popper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const DropdownMenu = ({ name, explore, shop, more, changeColor }) => {
   const color = grey[900];

   const [anchorEl, setAnchorEl] = useState(null);
   const [open, setOpen] = useState(false);

   const handleOpenListItem = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
      changeColor(true);
   };

   const handleClose = () => {
      setAnchorEl(null);
      setOpen(false);
      changeColor(false);
   };

   const id = open ? 'simple-popper' : undefined;

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
      <Box
         sx={{ paddingLeft: '1.75rem', cursor: 'pointer', alignSelf: 'center' }}
         onMouseEnter={handleOpenListItem}
         onMouseLeave={handleClose}
      >
         <Item>{name}</Item>
         <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            sx={{
               zIndex: '99',
               backgroundColor: color,
               width: '100%',
               color: 'white',
               pl: '15rem',
               transition: 'all 800ms ease',
            }}
            className="header-popup"
         >
            <Box sx={{ m: '50px 0', pb: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
               <Box>
                  <Typography sx={{ fontSize: '12px', color: grey[500] }}>Explore {name}</Typography>
                  <ul>
                     {explore.map((item, index) => (
                        <li key={index} style={{ fontSize: '20px', fontWeight: 'bold' }}>
                           {item}
                        </li>
                     ))}
                  </ul>
               </Box>
               <Box sx={{ ml: '5rem' }}>
                  <Typography sx={{ fontSize: '12px', color: grey[500] }}>Shop {name}</Typography>
                  <ul>
                     {shop.map((item, index) => (
                        <li key={index} style={{ fontSize: '12px', fontWeight: 'bold' }}>
                           {item}
                        </li>
                     ))}
                  </ul>
               </Box>
               <Box sx={{ ml: '5rem' }}>
                  <Typography sx={{ fontSize: '12px', color: grey[500] }}>More from {name}</Typography>
                  <ul>
                     {more.map((item, index) => (
                        <li key={index} style={{ fontSize: '12px', fontWeight: 'bold' }}>
                           {item}
                        </li>
                     ))}
                  </ul>
               </Box>
            </Box>
         </Popper>
      </Box>
   );
};

export default DropdownMenu;
