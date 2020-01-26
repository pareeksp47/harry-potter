import React, { Component } from 'react';
import { red } from '@material-ui/core/colors';
import gryffindor from '../gryffindor.png';
import './Header.css';
import {
    Typography, Grid, Card, CardMedia, CardContent, CardActions, Fab, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, Input, Button, TextField, MenuItem
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class Gryffindor extends Component {
    constructor() {
        super();
        this.state = {
            houseName: '',
            lastName: '',
            open: false,
            professor: 'Select your professor'
        }
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleProfessors = this.handleProfessors.bind(this);
        this.professors = [
            {
                value: 'John',
                label: 'Johnn Florian'
            },
            {
                value: 'ALex',
                label: 'Alexxxx'
            },
            {
                value: 'Eric',
                label: 'Eric'
            }
        ];
    }

    handleChangeLastName(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    handleChangeFirstName(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    handleProfessors(event) {
        this.setState({
            professor: event.target.value
        });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClickClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <>
                <Grid item xs={6}>
                    <Card className="card">
                        <CardMedia title="Gryffindor" className="cardMediaImg" image={gryffindor} />
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" component="h1"> Gryffindor </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4"> Toothbrush </Typography>
                                <Typography gutterBottom variant="h6"> 23 </Typography>

                            </Grid>
                            <Fab color="inherit" style={{ marginRight: '10px' }} aria-label="edit" onClick={this.handleClickOpen}>
                                <EditIcon fontSize="large" />
                            </Fab>
                        </CardActions>
                        <Dialog open={this.state.open} onClose={this.handleClickClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Add / Remove Points</DialogTitle>
                            <DialogContent>
                            <FormControl className="marginInputField" fullWidth> 
                                    <InputLabel htmlFor="component-simple">Points</InputLabel>
                                    <Input id="lastname" type="number" value={this.state.lastName} onChange={this.handleChangeLastName} />
                                </FormControl>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    fullWidth
                                    value={this.state.professor}
                                    onChange={this.handleProfessors}
                                >
                                    {this.professors.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                
                            </DialogContent>
                            <DialogActions>
                                <Button color="primary" onClick={this.handleClickClose}>
                                    Update Points</Button>
                            </DialogActions>
                        </Dialog>
                    </Card>
                </Grid>
            </>
        );
    }
}

export default Gryffindor;