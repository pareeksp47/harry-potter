import React, { Component } from 'react';
import { red } from '@material-ui/core/colors';
import './Header.css';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Fab, Dialog, DialogTitle,
    DialogContent, DialogContentText, DialogActions, FormControl, InputLabel,
    FormLabel, RadioGroup, FormControlLabel, Radio, Input, Button, TextField, MenuItem } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';


class House extends Component {
      constructor(props) {
        super(props);
		 
	  
	  this.state = {
			imageName: '',
			houseName: '',
			addpoint : '',
            open: false,
            professor: 'Select your professor'
	  }
	  
	  this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangePoints = this.handleChangePoints.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.handleProfessors = this.handleProfessors.bind(this);
        
    }
	
	 handleChangePoints(event) {
        this.setState({
            newPoint: event.target.value
        });
		 this.setState({
            addPoint: event.target.value
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
	
	addPoints = async() => {
		console.log(this.state.addPoint + " "+this.state.professor+" "+this.props.id);
		if(this.state.addPoint && this.state.professor != 'Select your professor' && this.props.id){
			
			const response = await fetch('/api/points/'+this.state.addPoint+'/'+this.state.professor+'/'+this.props.id,{method:'POST'});
			
			if (response.status == 200) this.props.points[this.props.id] = this.props.points[this.props.id] ? (parseInt(this.props.points[this.props.id]) + parseInt(this.state.addPoint )) : parseInt(this.state.addPoint);
			
			this.state.addPoint ='';
			this.state.professor = 'Select your professor';
		}
		
	} 

    handleClickClose = async () => {
        
		
		await this.addPoints();
		this.setState({ open: false });
    };

	  
	  componentDidMount() {
		 const name = require('../'+this.props.name.toLowerCase()+'.png');
		 this.setState({ imageName: name });
	 }

	
    render() {
		  
		  const { imageName } = this.state;
        return (
            <>
                <Grid item xs={6}>
                    <Card className="card">
                        <CardMedia title={this.props.name} className="cardMediaImg" src ={this.props.name.toLowerCase()} image={imageName} />
                        <CardContent>
                            <Typography variant="h2" color="textSecondary" component="h1"> {this.props.name} </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4"> Total Points </Typography>
                                <Typography gutterBottom variant="h6"> {this.props.points[this.props.id] ? this.props.points[this.props.id] : 0} </Typography>
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
                                    <Input id="newpoint" type="number" value={this.state.newpoint} onChange={this.handleChangePoints} />
									
                                </FormControl>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select"
                                    fullWidth
                                    value={this.state.professor}
                                    onChange={this.handleProfessors}
                                >
									<MenuItem key="-1" value={this.state.professor}>
                                            {}
                                        </MenuItem>
                                    {this.props.professors ? this.props.professors.map(option => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.firstname} {option.lastname}
                                        </MenuItem>
                                    )) : "" }
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

export default House;