import React from 'react';
import { footerCategory } from '../constants.js';
import { Box, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

function ListCategory() {
   return (
      <React.Fragment>
         <Box sx={{ maxHeight: '450px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
            {footerCategory.map((item, index) => (
               <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }} key={index}>
                  <h3 style={{ color: grey[700], fontSize: '13px', marginBottom: '8px' }}>{item.cat}</h3>
                  {item.subcat.map((subItem, index) => (
                     <Link
                        href="#"
                        sx={{ color: grey[700], fontSize: '13px', marginBottom: '8px', fontWeight: 'normal' }}
                        underline="hover"
                        key={index}
                     >
                        {subItem}
                     </Link>
                  ))}
               </div>
            ))}
         </Box>
         <Box>
            <p style={{ color: grey[600], fontSize: '13px', marginBottom: '8px' }}>
               More ways to shop:
               <Link href="#" sx={{ fontSize: '13px', marginBottom: '8px', fontWeight: 'normal' }} underline="always">
                  {' '}
                  Find an Apple Store{' '}
               </Link>
               or
               <Link href="#" sx={{ fontSize: '13px', marginBottom: '8px', fontWeight: 'normal' }} underline="always">
                  {' '}
                  other retailer{' '}
               </Link>
               near you. Or call 1-800-MY-APPLE.
            </p>
         </Box>
      </React.Fragment>
   );
}

export default ListCategory;
