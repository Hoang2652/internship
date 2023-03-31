import * as React from 'react';
import TextEditor from '@/components/form/TextEditor';
import Paper from '@mui/material/Paper';

export default function Category() {
   return (
      <Paper sx={{ maxWidth: '70%', margin: 'auto', mt: 5, minHeight: '250px' }}>
         <TextEditor placeholder={'Write something...'} />
      </Paper>
   );
}
