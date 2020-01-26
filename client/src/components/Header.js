import React, { Component } from 'react';
// import logo from './logo.svg';
import { red, indigo } from '@material-ui/core/colors';

import './Header.css';
import {
    makeStyles, AppBar, Toolbar, IconButton, Button, Typography, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, Input
} from '@material-ui/core';


class Header extends Component {
    // const classes = useStyles()
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: 'male',
            open: false
        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);

 this.handleAddProfessorSubmit = this.handleAddProfessorSubmit.bind(this);
    }

    componentDidMount() {
        this.getResponse()
            .then(res => {
                console.log(res)
            })
    }

    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        });
        console.log("lastname", this.state.lastName);
    }

    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
        console.log("firstname", this.state.firstName);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
        console.log("open");
    };

    handleClickClose = () => {
        this.setState({ open: false });
    };


    handleChangeRadio(event) {
        this.setState({
            gender: event.target.value
        });
    };

   
    getResponse = async () => {
        if(this.state.firstName && this.state.lastName && this.state.gender){
			
			const response = await fetch('/api/createProfessor/' + this.state.firstName + '/' + this.state.lastName + '/'+this.state.gender,{method:'POST'});
			const body = await response.json();
			console.log("body");
			if (response.status !== 200) throw Error(body.message);

			return body;
		}
        
    }

    handleAddProfessorSubmit = () => {
        console.log('entry');
        this.getResponse();
    }

    render() {

        return (
            <>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h4">
                            Hogwarts
                        </Typography>
                         <Button color="inherit" className="addStudentBtn" onClick={this.handleClickOpen} >Add Professor</Button>
						  <Button color="inherit" onClick={this.handleClickOpen} >Add Student</Button>
                    </Toolbar>
                </AppBar>
                <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
                   <DialogTitle id="form-dialog-title"> Create Professor</DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth className="marginInputField">
                            <InputLabel htmlFor="component-simple">First Name</InputLabel>
                            <Input id="firstname" value={this.state.firstName} required onChange={this.handleChangeFirstName} />
                        </FormControl>
                        <FormControl fullWidth className="marginInputField">
                            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                            <Input id="lastname" value={this.state.lastName} required onChange={this.handleChangeLastName} />
                        </FormControl>
					   <FormControl component="fieldset" className="marginInputField" >
                            <FormLabel component="legend" className="marginInputField">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender2" value={this.state.gender} onChange={this.handleChangeRadio}>
                                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" labelPlacement="start" />
                                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" labelPlacement="start" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                         <Button color="primary" onClick={this.handleAddProfessorSubmit}>
                            Create Professor</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default Header;