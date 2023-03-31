const { combineReducers } = require('redux');
const { default: userReducer } = require('./user');
const { default: snackbarReducer } = require('./snackbar');

const rootReducer = combineReducers({
   user: userReducer,
   snackbar: snackbarReducer,
});

export default rootReducer;
