import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

function NumberVolume() {
   const [value, setValue] = React.useState(1);

   const decrease = () => {
      if (value > 1) {
         setValue(value - 1);
      }
   };

   const increase = () => {
      setValue(value + 1);
   };

   const handleNumberVolume = (e) => {
      setValue(Number(e.target.value));
   };

   return (
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '& > *': {
               m: 1,
            },
         }}
      >
         <Button
            sx={{
               border: '1px solid',
               borderColor: grey[300],
               borderRadius: 0,
               color: 'black',
               maxHeight: '30px',
               minWidth: '30px',
               '&:hover': {
                  background: 'none',
                  borderColor: grey[300],
               },
            }}
            onClick={decrease}
         >
            -
         </Button>
         <TextField
            variant="standard"
            sx={{
               maxWidth: '3.75rem',
               maxHeight: '30px',
               borderRadius: '0',
               border: '1px solid',
               borderColor: grey[300],
               '& .MuiOutlinedInput-root:hover': {
                  '& > fieldset': {
                     borderColor: grey[300],
                  },
               },
            }}
            InputProps={{
               disableUnderline: true,
               style: { textAlign: 'center' },
               inputProps: {
                  style: { textAlign: 'center' },
               },
            }}
            onChange={handleNumberVolume}
            value={value}
         ></TextField>
         <Button
            sx={{
               border: '1px solid',
               borderColor: grey[300],
               borderRadius: 0,
               color: 'black',
               minWidth: '30px',
               ':hover': {
                  background: 'none',
                  borderColor: grey[300],
               },
               height: '30px',
            }}
            onClick={increase}
         >
            +
         </Button>
      </Box>
   );
}

export default NumberVolume;
