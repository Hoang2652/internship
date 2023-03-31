import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Dash from '@/components/underline';
import axios from 'axios';
import './Register.css';

export default function Register({ handleClose }) {
   // show password

   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => setShowPassword((show) => !show);

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   // check form

   const schema = yup
      .object()
      .shape({
         userName: yup
            .string()
            .min(3, "It's too short")
            .required('Please enter user name'),
         email: yup
            .string()
            .email('Please enter correct email format')
            .required('Please enter email'),
         password: yup
            .string()
            .min(6, 'Password minimum length should be 6')
            .required('Please enter password'),
         confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Password not matched')
            .required('Required'),
         name: yup
            .string()
            .min(6, 'your name minimum length should be 6')
            .required('Please enter name'),
         phone: yup.string().required('Please enter phone'),
         address: yup.string().required('Please enter address'),
      })
      .required();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         userName: '',
         email: '',
         password: '',
         confirmPassword: '',
         name: '',
         phone: '',
         address: '',
      },
      resolver: yupResolver(schema),
   });

   // axios signup

   const signup = async (data, e) => {
      e.preventDefault();
      try {
         const response = await axios.post(
            'https://retails.beesoft.com.vn/api/v1/auth/signup',
            {
               username: data.userName,
               email: data.email,
               password: data.password,
               roles: ['AOA'],
               name: data.name,
               phone: data.phone,
               address: data.address,
            },
            {
               headers: {
                  'Content-Type': 'application/json',
               },
            },
         );
         console.log(response.data);
         handleClose();
      } catch (error) {
         console.error(error);
      }
   };

   // Strong Password

   const trigger = () => {
      const indicator = document.querySelector('.indicator');
      const weak = document.querySelector('.weak');
      const medium = document.querySelector('.medium');
      const strong = document.querySelector('.strong');
      const text = document.querySelector('.text');
      const input = document.getElementById('register-password');
      let regExpWeak = /[a-z]/;
      let regExpMedium = /\d+/;
      let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
      let no = 0;
      if (input.value !== '') {
         indicator.style.display = 'block';
         indicator.style.display = 'flex';
         if (
            input.value.length <= 3 &&
            (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))
         )
            no = 1;
         if (
            input.value.length >= 6 &&
            ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
               (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
               (input.value.match(regExpWeak) && input.value.match(regExpStrong)))
         )
            no = 2;
         if (
            input.value.length >= 6 &&
            input.value.match(regExpWeak) &&
            input.value.match(regExpMedium) &&
            input.value.match(regExpStrong)
         )
            no = 3;
         if (no === 1) {
            weak.classList.add('active');
            weak.classList.add('pass_weak');
            text.style.display = 'block';
            text.textContent = 'Your password is too week';
            text.classList.add('text_weak');
         }
         if (no === 2) {
            weak.classList.add('pass_medium');
            medium.classList.add('pass_medium');
            medium.classList.add('active');
            text.textContent = 'Your password is medium';
            text.classList.add('text_medium');
         } else {
            weak.classList.remove('pass_medium');
            medium.classList.remove('active');
            text.classList.remove('text_medium');
         }
         if (no === 3) {
            weak.classList.add('active');
            medium.classList.add('active');
            strong.classList.add('active');
            weak.classList.add('pass_strong');
            medium.classList.add('pass_strong');
            strong.classList.add('pass_strong');
            text.textContent = 'Your password is strong';
            text.classList.add('text_strong');
         } else {
            weak.classList.remove('pass_strong');
            medium.classList.remove('pass_strong');
            strong.classList.remove('pass_strong');
            strong.classList.remove('active');
            text.classList.remove('text_strong');
         }
      } else {
         indicator.style.display = 'none';
         text.style.display = 'none';
      }
   };

   return (
      <>
         <h3 style={{ textAlign: 'center', marginTop: '10px' }}>Register</h3>
         <Dash />
         <form onSubmit={handleSubmit(signup)}>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-userName"
                     label="User Name"
                     name="userName"
                     multiline
                     maxRows={1}
                     size="small"
                     {...register('userName')}
                     error={!!errors.userName}
                     helperText={errors.userName ? errors.userName.message : null}
                  />
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-email"
                     label="Email"
                     name="email"
                     multiline
                     maxRows={1}
                     size="small"
                     {...register('email')}
                     error={!!errors.email}
                     helperText={errors.email ? errors.email.message : null}
                  />
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-password"
                     type={showPassword ? 'text' : 'password'}
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
                     name="password"
                     label="Password"
                     size="small"
                     {...register('password')}
                     error={!!errors.password}
                     onChange={trigger}
                  />
                  {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
                  <div className="text"></div>
                  <div className="indicator">
                     <span className="weak"></span>
                     <span className="medium"></span>
                     <span className="strong"></span>
                  </div>
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-password-confirm"
                     type={showPassword ? 'text' : 'password'}
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
                     label="Confirm Password"
                     size="small"
                     {...register('confirmPassword')}
                     error={!!errors.confirmPassword}
                  />
                  {!!errors.confirmPassword && <FormHelperText error>{errors.confirmPassword.message}</FormHelperText>}
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-yourName"
                     label="Your Name"
                     name="name"
                     multiline
                     maxRows={1}
                     size="small"
                     {...register('name')}
                     error={!!errors.name}
                     helperText={errors.name ? errors.name.message : null}
                  />
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-phone"
                     label="Phone"
                     name="phone"
                     multiline
                     maxRows={1}
                     size="small"
                     {...register('phone')}
                     error={!!errors.phone}
                     helperText={errors.phone ? errors.phone.message : null}
                  />
               </FormControl>
            </Grid>
            <Grid align="center">
               <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                  <TextField
                     id="register-address"
                     label="Address"
                     name="address"
                     multiline
                     maxRows={1}
                     size="small"
                     {...register('address')}
                     error={!!errors.address}
                     helperText={errors.address ? errors.address.message : null}
                  />
               </FormControl>
            </Grid>
            <Grid align="center" sx={{ mb: 2, mt: 2 }}>
               <Button variant="contained" type="submit">
                  Register
               </Button>
            </Grid>
         </form>
      </>
   );
}
