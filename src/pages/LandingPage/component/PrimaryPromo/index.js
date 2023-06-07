import React from 'react';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';

var p1 = require('@/assets/images/product/PrimaryProductPromo1.jpg');
var p2 = require('@/assets/images/product/PrimaryProductPromo2.jpg');
var p3 = require('@/assets/images/product/PrimaryProductPromo3.jpg');

// {title: '', type: , subtitle: '', image: '', link: '', titleColor: ''};
// type: '0' = product, '1' = news
const Products = [
   {
      title: 'iPhone 14 pro',
      type: 0,
      subtitle: 'Pro. Beyond.',
      image: p1,
      link: 'https://www.apple.com/iphone-14-pro/',
      titleColor: 'white',
   },
   {
      title: 'iPhone 14',
      type: 0,
      subtitle: 'Two great size. Now with a splash of yellow.',
      image: p2,
      link: 'https://www.apple.com/iphone-14/',
      titleColor: 'black',
   },
   {
      title: 'Apple Watch',
      type: 0,
      subtitle: 'A healthy leap ahead.',
      image: p3,
      link: 'https://www.apple.com/apple-watch-series-8/',
      titleColor: 'white',
   },
];

function PrimaryPromo() {
   return (
      <Box sx={{ width: '100%' }}>
         {Products.map((attr, index) => (
            <Box sx={{ position: 'relative', width: '100%', height: '575px' }} key={index}>
               <Box
                  sx={{
                     position: 'absolute',
                     width: '100%',
                     height: '100%',
                     overflow: 'hidden',
                     zIndex: 1,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     marginTop: '35px',
                  }}
               >
                  <Typography variant="h3" sx={{ fontWeight: '800', color: attr.titleColor }}>
                     {attr.title}
                  </Typography>
                  <Typography
                     variant="subtitle1"
                     sx={{
                        lineHeight: 'normal',
                        textAlign: 'center',
                        maxWidth: '390px',
                        fontWeight: '400',
                        fontSize: '26px',
                        color: attr.titleColor,
                     }}
                  >
                     {attr.subtitle}
                  </Typography>
                  <Box>
                     <Button variant="text" sx={{ fontSize: '22px', fontWeight: '400', textTransform: 'none' }}>
                        Learn more &gt;
                     </Button>
                     <Button variant="text" sx={{ fontSize: '22px', fontWeight: '400', textTransform: 'none' }}>
                        Buy &gt;
                     </Button>
                  </Box>
               </Box>
               <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                  <img
                     src={attr.image}
                     alt={attr.title}
                     style={{ width: '140%', height: 'inherit', marginLeft: '-20%' }}
                  />
               </Box>
            </Box>
         ))}
      </Box>
   );
}

export default PrimaryPromo;
