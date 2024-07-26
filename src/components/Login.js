import { Box, Button, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
    });
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    
    const sendRequest = async() => {
        await axios.post("http://localhost:5000/books", {
            email : String(inputs.email),
            password: String(inputs.password),
        }).then(res=>res.data);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
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
                <FormLabel>Email Id</FormLabel>
                <TextField value={inputs.email} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='email' />
                <FormLabel>Password</FormLabel>
                <TextField type='password' value={inputs.password} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='password' />
                <Button variant='contained' type='submit'>Login</Button>
            </Box>
        </form>
    )
}        

export default Login;