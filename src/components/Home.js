import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        contact:'',
        password:'',
        cpassword:''
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async() => {
        await axios.post("http://localhost:5000/login", {
            name : String(inputs.name),
            email: String(inputs.email),
            contact: Number(inputs.contact),
            password: Number(inputs.password),
            cpassword: Number(inputs.cpassword),
        }).then(res=>res.data);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=>history('/books'))
    }


  return (
    <form onSubmit={handleSubmit}>
        <Box
            display="flex" 
            flexDirection="column" 
            justifyContent={'center'} 
            maxWidth={700}
            alignContent={'center'}
            alignSelf={'center'}
            marginLeft={'auto'}
            marginRight={'auto'}
            marginTop={5}
        >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
            <FormLabel>Email</FormLabel>
            <TextField value={inputs.email} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='email' />
            <FormLabel>Contact No.</FormLabel>
            <TextField value={inputs.contact} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='contact' />
            <FormLabel>Password</FormLabel>
            <TextField type='password' value={inputs.password} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='password' />
            <FormLabel>Confirm Password</FormLabel>
            <TextField type='password' value={inputs.cpassword} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='cpassword' />
            <Button variant='contained' type='submit'>Register</Button>
            <NavLink to='/login'>I am already Registered</NavLink>
        </Box>
    </form>
  )
}

export default Home;