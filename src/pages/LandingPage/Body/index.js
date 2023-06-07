import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import PrimaryPromo from '../component/PrimaryPromo';
import SecondaryPromo from '../component/SecondaryPromo';
import MoviePromoSlider from '../component/moviePromoSlider';
import './index.css';

function body(prop) {
   const [opacity, setOpacity] = useState(1);
   useEffect(() => {
      if (prop.open) {
         setOpacity(0.8);
      } else {
         setOpacity(1);
      }
   });

   return (
      <Box sx={{ display: 'flex', position: 'relative', flexDirection: 'column', opacity: opacity }}>
         <Box sx={{ overflow: 'hidden', width: '100%', height: '624px', top: 0, left: 0, position: 'absolute' }}>
            <figure className="unit-image"></figure>
         </Box>
         <PrimaryPromo />
         <SecondaryPromo />
         <MoviePromoSlider />
      </Box>
   );
}

export default body;
