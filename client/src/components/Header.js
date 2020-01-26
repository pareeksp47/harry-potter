import React, { Component } from 'react';
// import logo from './logo.svg';

import './Header.css';
import {
   AppBar, Toolbar, Button, Typography, Dialog, DialogTitle,
    DialogContent, DialogActions, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, Input,TextField,MenuItem
} from '@material-ui/core';


class Header extends Component {
    // const classes = useStyles()
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            gender: 'M',
            open: false,
            firstNameStud: '',
            lastNameStud: '',
            genderStud: 'M',
            openStud: false,
            house_id: ''
        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleAddProfessorSubmit = this.handleAddProfessorSubmit.bind(this);

        this.handleChangeFirstNameStud = this.handleChangeFirstNameStud.bind(this);
        this.handleChangeLastNameStud = this.handleChangeLastNameStud.bind(this);
        this.handleChangeRadioStud = this.handleChangeRadioStud.bind(this);
        this.handleChangeSelectHouse = this.handleChangeSelectHouse.bind(this);
        this.handleClickOpenStud = this.handleClickOpenStud.bind(this);
        this.handleClickCloseStud = this.handleClickCloseStud.bind(this);
        this.handleAddStudentSubmit = this.handleAddStudentSubmit.bind(this);
    }

    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }
    handleChangeLastNameStud(event) {
        this.setState({
            lastNameStud: event.target.value
        });
    }
    handleChangeFirstNameStud(event) {
        this.setState({
            firstNameStud: event.target.value
        });
    }
    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    }
    handleClickOpenStud = () => {
        this.setState({ openStud: true });
    };


    handleClickOpen = () => {
        this.setState({ open: true });

    };
    handleClickCloseStud = () => {
        this.setState({ openStud: false });
    };
    handleClickClose = () => {
        this.setState({ open: false });
    };

    handleChangeRadioStud(event) {
        this.setState({
            genderStud: event.target.value
        });
    };
    handleChangeRadio(event) {
        this.setState({
            gender: event.target.value
        });
    };
    handleChangeSelectHouse(event) {
        this.setState({
            house_id: event.target.value
        });
    };

    getResponse = async () => {
        if (this.state.firstName && this.state.lastName && this.state.gender) {

            const response = await fetch('/api/createProfessor/' + this.state.firstName + '/' + this.state.lastName + '/' + this.state.gender, { method: 'POST' });
            const body = await response.json();

            if (response.status !== 200) throw Error(body.message);
            this.state.firstName='';
            this.state.lastName ='';
            return body;
        }
    }

    getStudResponse = async () => {
        if (this.state.firstNameStud && this.state.lastNameStud && this.state.genderStud && this.state.house_id) {
            console.log('house isd',typeof(this.state.house_id));
            const response = await fetch('/api/createStudent/' + this.state.firstNameStud + '/' + this.state.lastNameStud + '/' + this.state.genderStud+'/'+this.state.house_id.toString(), { method: 'POST' });
            const body = await response.json();

            if (response.status !== 200) throw Error(body.message);
            this.state.firstNameStud='';
            this.state.lastNameStud ='';
            this.state.house_id='';
            return body;
        }
    }

    handleAddProfessorSubmit = () => {
        this.getResponse();
        this.handleClickClose();
		window.location.reload();
    }
    handleAddStudentSubmit = () => {
        this.getStudResponse();
        this.handleClickCloseStud();
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
                        <Button color="inherit" onClick={this.handleClickOpenStud} >Add Student</Button>
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
                                <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" labelPlacement="start" />
                                <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" labelPlacement="start" />
                            </RadioGroup>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleAddProfessorSubmit}>
                            Create Professor</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.openStud} onClose={this.handleClickCloseStud} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> Create Student</DialogTitle>
                    <DialogContent>
                        <FormControl fullWidth className="marginInputField">
                            <InputLabel htmlFor="component-simple">First Name</InputLabel>
                            <Input id="firstname" value={this.state.firstNameStud} required onChange={this.handleChangeFirstNameStud} />
                        </FormControl>
                        <FormControl fullWidth className="marginInputField">
                            <InputLabel htmlFor="component-simple">Last Name</InputLabel>
                            <Input id="lastname" value={this.state.lastNameStud} required onChange={this.handleChangeLastNameStud} />
                        </FormControl>
                        <FormControl component="fieldset" className="marginInputField" >
                            <FormLabel component="legend" className="marginInputField">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender2" value={this.state.genderStud} onChange={this.handleChangeRadioStud}>
                                <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" labelPlacement="start" />
                                <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" labelPlacement="start" />
                            </RadioGroup>
                        </FormControl>
                        <TextField id="standard-select-currency" select label="Select House" fullWidth value={this.state.house_id} onChange={this.handleChangeSelectHouse}>
                            <MenuItem key="-1" value={this.state.house_id}>
                                {}
                            </MenuItem>
                            {this.props.houses ? this.props.houses.map(option => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            )) : ""}
                        </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleAddStudentSubmit}>
                            Create Student</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default Header;