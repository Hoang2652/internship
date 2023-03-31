import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Register from '../Register/Register.js';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Dash from '@/components/underline';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { openSnackbar } from '@/store/actions/snackbar';
import './Login.css';

const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: 'background.paper',
   border: '',
   boxShadow: 24,
   pt: 2,
   px: 4,
   pb: 3,
};

export default function Login() {
   const [showPassword, setShowPassword] = React.useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleUsernameChange = (event) => {
      setUsername(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         const response = await axios.post('https://retails.beesoft.com.vn/api/v1/auth/login', {
            username: username,
            password: password,
         });
         if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem('token', token);
            dispatch(openSnackbar('login success', 'success'));
            navigate('/admin/home');
         } else {
            console.error('Login failed.');
         }
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={1} style={{ height: '100vh' }}>
            <Grid item xs={6} md={7} margin="auto">
               <Box sx={{ width: 600, float: 'right', mb: 10 }}>
                  <h3 style={{ color: '#166fe5', fontSize: '60px' }}>Facebook</h3>
                  <div style={{ fontSize: '20px' }}>
                     Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
                  </div>
               </Box>
            </Grid>
            <Grid item xs={6} md={5} margin="auto">
               <Card
                  sx={{
                     minWidth: 275,
                     maxWidth: 375,
                     mb: 10,
                     boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
                     borderRadius: 2,
                  }}
               >
                  <Grid align="center">
                     <FormControl sx={{ m: 2, width: '35ch', mt: 4 }} variant="outlined">
                        <TextField
                           id="outlined-multiline-flexible"
                           label="User Name"
                           multiline
                           maxRows={4}
                           value={username}
                           onChange={handleUsernameChange}
                        />
                     </FormControl>
                  </Grid>
                  <Grid align="center">
                     <FormControl sx={{ m: 2, width: '35ch' }} variant="outlined">
                        <TextField
                           id="outlined-adornment-password"
                           type={showPassword ? 'text' : 'password'}
                           value={password}
                           onChange={handlePasswordChange}
                           InputProps={{
                              endAdornment: (
                                 <InputAdornment position="end">
                                    <IconButton
                                       aria-label="toggle password visibility"
                                       onClick={handleClickShowPassword}
                                       onMouseDown={handleMouseDownPassword}
                                       edge="end"
                                    >
                                       {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                 </InputAdornment>
                              ),
                           }}
                           label="Password"
                        />
                     </FormControl>
                  </Grid>
                  <Grid align="center">
                     <Button variant="contained" onClick={handleSubmit}>
                        Login
                     </Button>
                  </Grid>
                  <Dash />
                  <Grid align="center">
                     <Button variant="text">forgot password</Button>
                  </Grid>
                  <Grid align="center" sx={{ mb: 4 }}>
                     Don't have an account?
                     <Button variant="text" onClick={handleOpen}>
                        Register
                     </Button>
                  </Grid>
               </Card>
            </Grid>
         </Grid>
         <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
               <Register handleClose={handleClose} />
            </Box>
         </Modal>
      </Box>
   );
}
