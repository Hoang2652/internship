import * as React from 'react';
import { connect } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { closeSnackbar } from '@/store/actions/snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AppSnackbar(props) {
   const { open, message, severity, closeSnackbar } = props;

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return;
      }

      closeSnackbar();
   };

   return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity={severity}>
            {message}
         </Alert>
      </Snackbar>
   );
}
