import React from 'react';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';

var p1 = require('@/assets/images/product/SecondaryProductPromo (1).jpg');
var p2 = require('@/assets/images/product/SecondaryProductPromo (2).jpg');
var p3 = require('@/assets/images/product/SecondaryProductPromo (3).jpg');
var p4 = require('@/assets/images/product/SecondaryProductPromo (4).jpg');
var p5 = require('@/assets/images/product/SecondaryProductPromo (5).jpg');
var p6 = require('@/assets/images/product/SecondaryProductPromo (6).jpg');

var WWDC23Img = require('@/assets/images/product/WWDC23.png');
var MusicClassicalImg = require('@/assets/images/product/MusicClassical.png');
var cardImg = require('@/assets/images/product/card.png');

// {title: '', type: , subtitle: '', image: '', link: '', titleColor: '', propStyle: {}};
// type: '0' = product, '1' = news
// propStyle is holding the overwrite style
const Products = [
   {
      titleIcon: WWDC23Img,
      title: 'Apple Worldwide Developers Conference 2023',
      type: 1,
      subtitle: 'Apple Worldwide Developers Conference. Join us online June 5‑9.',
      image: p1,
      link: 'https://www.apple.com/iphone-14-pro/',
      titleColor: 'white',
      bottom: true,
   },
   {
      title: 'iPad',
      type: 0,
      subtitle: 'Lovable. Drawable. Magical.',
      image: p2,
      link: 'https://www.apple.com/iphone-14/',
      titleColor: 'black',
   },
   {
      title: 'MacBook Pro',
      type: 0,
      subtitle: 'Supercharged by M2 Pro and M2 Max.',
      image: p3,
      link: 'https://www.apple.com/apple-watch-series-8/',
      titleColor: 'white',
   },
   {
      title: 'HomePod',
      type: 0,
      subtitle: 'Profound sound.',
      image: p4,
      link: 'https://www.apple.com/apple-watch-series-8/',
      titleColor: 'white',
   },
   {
      titleIcon: MusicClassicalImg,
      title: 'Apple Music Classical',
      type: 1,
      subtitle: 'Introducing the app designed for classical.',
      image: p5,
      link: 'https://www.apple.com/apple-watch-series-8/',
      titleColor: 'white',
   },
   {
      titleIcon: cardImg,
      title: 'Apple Card',
      type: 0,
      subtitle: 'Get up to 3% Daily Cash back with every purchase.',
      image: p6,
      link: 'https://www.apple.com/apple-watch-series-8/',
      titleColor: 'black',
   },
];

function titleDisplay(prop) {
   return (
      <Typography variant="h4" sx={{ fontWeight: '800', color: prop.titleColor, marginBottom: '12px' }}>
         {prop.title}
      </Typography>
   );
}

function IconDisplay(prop) {
   return (
      <Box sx={{ marginBottom: '12px' }}>
         <img src={prop.value} alt="Nothing" />
      </Box>
   );
}

function BuyOptionDisplay() {
   return (
      <Button variant="text" sx={{ fontSize: '17px', fontWeight: '400', textTransform: 'none' }}>
         Buy &gt;
      </Button>
   );
}
function SecondaryPromo() {
   return (
      <Box>
         <ImageList
            sx={{ width: '100%', height: '100%', padding: '12px', overflowY: 'visible' }}
            cols={2}
            gap={12}
            rowHeight={575}
         >
            {Products.map((element, index) => (
               <ImageListItem key={index} sx={{ overflow: 'hidden' }}>
                  <img src={element.image} alt={element.title} style={{ width: '100%', height: 'inherit' }} />
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
                        marginTop: element.bottom ? '425px' : '35px',
                     }}
                  >
                     {!element.titleIcon
                        ? titleDisplay({ title: element.title, titleColor: element.titleColor })
                        : IconDisplay({ value: element.titleIcon })}
                     <Typography
                        variant="subtitle1"
                        sx={{
                           lineHeight: 'normal',
                           maxWidth: '400px',
                           fontWeight: '400',
                           fontSize: '20px',
                           color: element.titleColor,
                           textAlign: 'center',
                        }}
                     >
                        {element.subtitle}
                     </Typography>
                     <Box>
                        <Button variant="text" sx={{ fontSize: '17px', fontWeight: '400', textTransform: 'none' }}>
                           Learn more &gt;
                        </Button>
                        {element.type === 0 ? BuyOptionDisplay() : ''}
                     </Box>
                  </Box>
               </ImageListItem>
            ))}
         </ImageList>
      </Box>
   );
}

export default SecondaryPromo;
