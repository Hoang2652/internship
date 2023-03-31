import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export default function TaskBar({ changeSearch }) {
   return (
      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
         <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}>
            <InputBase
               sx={{ ml: 1, flex: 1 }}
               placeholder="Search Customers..."
               inputProps={{ 'aria-label': 'search customer' }}
               onChange={changeSearch}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
               <SearchIcon />
            </IconButton>
         </Paper>
         <Stack spacing={2} direction="row">
            <Link to="/admin/add-customer" className="nav-bar-link">
               <Button variant="contained">Add Customer</Button>
            </Link>
         </Stack>
      </Box>
   );
}
