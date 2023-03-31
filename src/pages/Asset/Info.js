import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { orange, grey } from '@mui/material/colors';

const color = grey[700];

function TitleInfo({ children }) {
   return (
      <React.Fragment>
         <Grid item xs={2}>
            <Typography sx={{ color: { color } }}>{children}</Typography>
         </Grid>
      </React.Fragment>
   );
}

function Info({ children }) {
   return (
      <React.Fragment>
         <Grid item xs={9}>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>{children}</Box>
         </Grid>
      </React.Fragment>
   );
}

function OutlineButton({ children, handleChangeColor }) {
   return (
      <React.Fragment>
         <Button
            variant="outlined"
            sx={{
               minWidth: '80px',
               minHeight: '2rem',
               color: 'black',
               borderColor: grey[300],
               fontSize: '10px',
               ':hover': {
                  borderColor: orange[900],
                  color: orange[900],
                  bgcolor: 'white',
               },
            }}
            onMouseEnter={handleChangeColor}
         >
            {children}
         </Button>
      </React.Fragment>
   );
}

export { TitleInfo, Info, OutlineButton };
