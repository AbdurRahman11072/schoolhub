
"use client"

import bg2 from '@/public/bg2.jpg';
import "@/scss/index.scss";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const navigate = useRouter();
  const dispatch = useDispatch()


      const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        const userdata = {
            email,
            password
        }
        console.log(userdata);
        
  await axios.post("/api/user/login", userdata)   
  // await axios.get("/api/user/logout")
  .then(function (response) {
    if(response.status =="200"){
      toast.success("Login successful")    
      return navigate.push("/")
    }
  })
  .catch(function (error) {
    console.log(error);
  });
 


    }
    return (
        <div className='login_page'>
        <div className='login_main'>
        <Image className='login_bg' src={bg2} alt="" height={1200}/>
        </div>
        <div className='login_form'>
         
          <div className='login_box'>
            <h1 className='login_text'>Login</h1>
            <div className='text_border'></div>
  <div className='form'>
    

              <Box onSubmit={handleSubmit}
                component='form'
                sx={{
                  '& > :not(style)': { m: 1, width: '260px' },
                }}
                noValidate
                autoComplete='off'
              >               
                 <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          name='email'
        />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
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
            }
            label="Password"
          />
        </FormControl>
                <button
                  type='submit'
                  className='form_button'
                >
                  Login
                </button>
              </Box>
              <h1 >Don&apos;t have account? <Link href={"/signup "} className='slink'>signup</Link></h1>
           
         </div>
          </div>

          
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    )
}

export default LoginPage