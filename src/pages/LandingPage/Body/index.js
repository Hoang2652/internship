import React from 'react';
import Box from '@mui/material/Box';
import './index.css';

function body() {
   return (
      <Box sx={{ display: 'flex', position: 'relative', flexDirection: 'column' }}>
         <Box sx={{ overflow: 'hidden', width: '100%', height: '624px', top: 0, left: 0, position: 'absolute' }}>
            <figure className="unit-image"></figure>
         </Box>
      </Box>
   );
}

export default body;
