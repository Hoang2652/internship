import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function Search({ changeSearch }) {
    return (
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
    );
}
