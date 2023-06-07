import React from 'react';
import { Container, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import Dash from '@/components/underline/dash/index.js';
import Info from './info.js';
import ListCategory from './ListCategory.js';
import Policy from './policy.js';
import './index.css';

function Footer() {
   return (
      <Box sx={{ backgroundColor: grey[100], width: '100%' }}>
         <Container maxWidth="lg" className="container-footer">
            <Info />
            <Dash />
            <ListCategory />
            <Dash />
            <Policy />
         </Container>
      </Box>
   );
}

export default Footer;
