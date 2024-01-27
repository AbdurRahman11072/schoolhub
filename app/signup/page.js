"use client"

import bg2 from '@/public/bg2.jpg';
import "@/scss/index.scss";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const SignUp = () => {
  const navigate = useRouter()
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

const [imgurl,setimgurl] = useState("")

console.log(imgurl);

  const uploadimg = (e) =>{
e.preventDefault();
const image = e.target.files[0];
const imgdata = new FormData();
imgdata.append("image", image)
console.log(image);

fetch("https://api.imgbb.com/1/upload?key=6cd6de2d1aee3f62a61df4ace3b1c3ab", {
  method:"POST",
  body: imgdata
})
.then(res =>res.json())
.then(data =>{
  const uplodedimgurl = data.data.url;
  console.log("file uploaded : ",uplodedimgurl);
  toast.success("Image has been uploaded")
  setimgurl(uplodedimgurl)
})

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const username = form.get('name')
    const email = form.get('email')
    const password = form.get('password')
    const phoneNum = form.get('phoneNum')
    const photo = imgurl
    const access = form.get("access")

    const userdata = {
      username,
      email,
      password,
      phoneNum,
      photo,
      access
  
    }
 
   
   fetch("/api/user/signin",{
    method:"POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify(userdata)
   })
   .then(res =>res.json())
    .then(data =>{
      console.log(data);
    if(data?.status == 200){
      toast.success(data.message)
     return navigate.push("/login")
      
    }
    toast.error("There is a problem in server")
      
    })


  }
  
  
    return (
      <div className='signup_page'>
        <div className='signup_main'>
            
          <Image className='signup_bg' src={bg2}  alt="" height={1200}/>
        </div>
        <div className='signup_form'>
         
          <div className='signup_box'>
            <h1 className='signup_text'>SignUp</h1>
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
                <TextField label='Username' variant='outlined' type='text' name='name' />
                <TextField label='Email' variant='outlined' type='email' name='email'  />
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
                <TextField label='Phone Number' variant='outlined' type='text' name='phoneNum'/>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Access</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"                    
                    label="access"
                    name='access'
                  >
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                   
                  </Select>
                </FormControl>
                <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
                  Upload Image
                  <VisuallyHiddenInput type='file'  name='image' onChange={uploadimg}/>
                </Button>
                <button
                  type='submit'
                  className='form_button'
                >
                  SignUp
                </button>
              </Box>
              <h1 > Already have an account? <Link href={"/login "} className='slink'>Login</Link></h1>
           
  </div>


          </div>
          {
    imgurl ? <Image src={imgurl} alt='Profile Image' width={250} height={250} />: ""
  }

         
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    );
  };
  
  export default SignUp;
  