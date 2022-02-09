import React, { Component } from 'react';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {AppBar,Toolbar} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export class student extends Component {
  render() {
    const formstyles = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        color: 'black',
        background:'#f8f8ff',
        alignItems: 'center',
        // fontFamily:"serif"
        // justifyContent:'center',
        alignItems:'center'
}
    return (
    <div>
         <AppBar sx={{display:'flex',bgcolor:'#2d1d19',alignItems:'center'}}>
            <Toolbar>
                <Typography variant="h3" component="div" sx={{minWidth:'100%'}}>
                Library Management
                </Typography>
            </Toolbar>
        </AppBar>
        <form style = {formstyles} method="POST">
                    {/* <div style = {boxstyles}> */}
                    <Typography variant="h1" component="div" sx={{mt:10}}>
                    Student's Info
                    </Typography>
                    <TextField
                    required
                    label="First Name" type = "text" name = "firstname" placeholder = "First Name" 
                    sx={{mt:2,minWidth:'50%'}}
                    />
                    <TextField
                    required 
                    sx ={{mt:2,minWidth:'50%'}}
                    label="Last Name" type = "text" name = "lastname" placeholder = "Last Name" 
                    />
                    <Button sx={{mt:5,minWidth:'50%'}} name="login" type="submit" variant="contained">
                    Submit
                    </Button>
                    {/* </div> */}
                </form>
        {/* </Box> */}
    </div>);
  }
}

export default student;
