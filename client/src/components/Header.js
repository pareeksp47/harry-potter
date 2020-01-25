import React, { Component } from 'react';
// import logo from './logo.svg';
import { red } from '@material-ui/core/colors';

// import './Header.css';
import {
    makeStyles, AppBar, Toolbar, IconButton, Button, Typography, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, Input
} from '@material-ui/core';
// const styles = theme => ({
//     root: {
//       flexGrow: 3,
//     },
//     form_root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//         color: red,
//       flexGrow: 1,
//     },
//     paper: {
//       height: 280,
//       width: 500,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//     hufflepuff: {
//       //backgroundImage: `url(${logo})`,
//       height: 280,
//       backgroundPosition: 'center',
//       filter: 9,
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat'
//     },
//     card: {
//       maxWidth: 500,
//     },
//     media: {
//       height: 150,
//       margin: 50,
//       padding: 10,
//       paddingTop: '50.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//     tableRoot: {
//       width: '100%',
//     },
//     tableContainer: {
//       maxHeight: 440,
//     },
//     modal_paper: {
//       position: 'absolute',
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   });

// //   const classes = useStyles()

class Header extends Component {
    // const classes = useStyles()
    //   constructor() {
    //     super();
    //   }

      state = {
        gryffindor: ''
      }

    //   getResponse = async() => {
    //     const response = await fetch('/api/getStudents');
    //     const body = await response.json();
    // 	console.log("body");
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    //   }

    //   componentDidMount() {
    //     this.getResponse()
    //       .then(res => {
    //         const someData = res.students[0].firstname;
    //         this.setState({ renderedResponse: someData });
    //       })
    //   }

    render() {

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4">
                            Hogwarts
                        </Typography>
                        <Button color="inherit" >Add Student/Professor</Button>
                    </Toolbar>
                </AppBar>
                {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> Create Student</DialogTitle>
            <DialogContent>
            
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-simple">First Name</InputLabel>
                    <Input id="firstname" value={firstName} onChange={handleChangeFirstName} />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                    <Input id="lastname" value={lastName} onChange={handleChangeLastName} />
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender2" value={value} onChange={handleChangeRadio}>
                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" labelPlacement="start" />
                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" labelPlacement="start" />
                    </RadioGroup>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Create Student</Button>
            </DialogActions>
        </Dialog> */}
            </>
        );
    }
}

export default Header;