import React from 'react';
import { Box, Divider, Link } from '@mui/material';
import { grey } from '@mui/material/colors';

function policy() {
   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: '1rem',
         }}
      >
         <Box sx={{ color: grey[600], fontSize: '13px', mr: '25px', width: '450px', whiteSpace: 'nowrap' }}>
            Copyright © 2023 Apple Inc. All rights reserved.
         </Box>
         <Box sx={{ display: 'flex', flexDirection: 'row', alignItem: 'center', width: '100%' }}>
            <Link href="#" sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal' }} underline="hover">
               Privacy Policy
            </Link>
            <Divider orientation="vertical" variant="middle" sx={{ m: '0 8px', borderColor: grey[900] }} />
            <Link href="#" sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal' }} underline="hover">
               Term of Use
            </Link>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ m: '0 8px', borderColor: grey[900] }} />
            <Link href="#" sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal' }} underline="hover">
               Sales & Refunds
            </Link>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ m: '0 8px', borderColor: grey[900] }} />
            <Link href="#" sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal' }} underline="hover">
               Legal
            </Link>
            <Divider orientation="vertical" variant="middle" flexItem sx={{ m: '0 8px', borderColor: grey[900] }} />
            <Link href="#" sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal' }} underline="hover">
               Site Map
            </Link>
         </Box>
         <Box sx={{ justifySelf: 'end' }}>
            <Link
               href="#"
               sx={{ color: grey[700], fontSize: '13px', fontWeight: 'normal', whiteSpace: 'nowrap' }}
               underline="hover"
            >
               United State
            </Link>
         </Box>
      </Box>
   );
}

export default policy;
