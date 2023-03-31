import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Dash from '@/components/underline';

function AddCustomer() {
   return (
      <Card sx={{ maxWidth: 750, margin: 'auto', marginTop: 2, p: 2 }}>
         <Typography variant="h4" align="center">
            ADD CUSTOMER
         </Typography>
         <Dash />
         <CardContent align="center">
            <FormControl sx={{ m: 1, width: '650px' }} variant="outlined">
               <TextField label="Id" name="id" multiline maxRows={1} fullWidth />
            </FormControl>
            <FormControl sx={{ m: 1, width: '650px' }} variant="outlined">
               <TextField label="Name" name="Name" multiline maxRows={1} />
            </FormControl>
            <FormControl sx={{ m: 1, width: '650px' }} variant="outlined">
               <TextField label="BirthDay" name="BirthDay" multiline maxRows={1} />
            </FormControl>
            <FormControl sx={{ m: 1, width: '650px' }} variant="outlined">
               <TextField label="Gender" name="Gender" multiline maxRows={1} />
            </FormControl>
            <FormControl sx={{ m: 1, width: '650px' }} variant="outlined">
               <TextField label="Email" name="Email" multiline maxRows={1} />
            </FormControl>
         </CardContent>
         <CardActions sx={{ justifyContent: 'center' }}>
            <Button variant="contained" sx={{ marginRight: '20px' }}>
               Add
            </Button>
            <Button variant="contained" color="success">
               Reset
            </Button>
         </CardActions>
      </Card>
   );
}

export default AddCustomer;
