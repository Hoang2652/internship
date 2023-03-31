const initialState = {
   open: false,
   message: '',
   severity: '',
};

function snackbarReducer(state = initialState, action) {
   switch (action.type) {
      case 'OPEN_SNACKBAR':
         return {
            open: true,
            message: action.payload.message,
            severity: action.payload.severity,
         };
      case 'CLOSE_SNACKBAR':
         return {
            open: false,
            message: '',
            severity: '',
         };
      default:
         return state;
   }
}

export default snackbarReducer;
