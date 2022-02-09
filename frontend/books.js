import React, { Component } from 'react';
import {Box,AppBar,Toolbar,Typography,
Grid,TextField,Button} from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DateAdapter from '@mui/lab/AdapterDateFns';
// import DateAdapter from '@mui/lab/AdapterDayjs';
// import DateAdapter from '@mui/lab/AdapterLuxon';
// import DateAdapter from '@mui/lab/AdapterMoment';

export class books extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bookname:'',
       authorname:'',
       studentname:'',
       borrowdate:'',
       returndate:'',
    }
  }
  submitHandler=(e)=>{
    console.log(e.target.value)
  }
  render() {
    return (
    <div>
        <AppBar sx={{display:'flex',bgcolor:'#2d1d19',alignItems:'center'}}>
            <Toolbar>
                <Typography variant="h3" component="div" sx={{minWidth:'100%'}}>
                Library Management
                </Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{mt:10}}>
        <form >
        <Grid container spacing={2} sx={{width:'100%',display:'flex',flexDirection:'column',
        justifyContent:'center',alignItems:'center'}}>
            <Typography variant="h1" component="div">
            Book's Info
            </Typography>
            <Grid item xs={12} sx={{width:'100%'}}>
                <TextField
                autoWidth
                required
                name="bookname"
                placeholder="Book's Name"
                label="Enter Book Name">
                </TextField>
            </Grid>
            <Grid item xs={12} >
                <TextField
                autoWidth
                required
                name="authorname"
                placeholder="Author's Name"
                label="Enter Author's Name"
>
                </TextField>
            </Grid>
            <Grid item xs={12} >
                <TextField
                autoWidth
                name="borrow"
                placeholder="Student Name"
                label="Enter Student Name"
                >
                </TextField>
            </Grid>
            <Grid item xs={12} >
            {/* <LocalizationProvider  dateAdapter={DateAdapter}>
            <DesktopDatePicker
          label="Borrow Date"
          inputFormat="MM/dd/yyyy"
          placeholder="Borrow Date"
        //   value={value}
        //   onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider> */}
            <TextField
        id="date"
        label="Borrow Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
            </Grid>
        <Grid item xs={12}>
        <TextField
        id="date"
        label="Expected Return Date"
        type="date"
        defaultValue="2018-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
        </Grid>
            <Grid item xs={12}>
                <Button variant="contained" type="submit"
                onClick={this.submitHandler}>
                    Submit
                </Button>
            </Grid>
        </Grid>
        </form>
        </Box>
    </div>
    );
  }
}

export default books;
