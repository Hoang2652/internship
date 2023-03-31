export function openSnackbar(message, severity) {
   return {
      type: 'OPEN_SNACKBAR',
      payload: {
         message,
         severity,
      },
   };
}

export function closeSnackbar() {
   return {
      type: 'CLOSE_SNACKBAR',
   };
}
