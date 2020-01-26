import React, { Component } from 'react';
import '../App.css';
import { Box, makeStyles, Container, Grid,Typography } from '@material-ui/core';
import Header from './Header';
import House from './House';


class App extends Component {
  state = {
    houses: '',
	points: '',
	professors : ''
  }

  getHouses = async() => {
    const response = await fetch('/api/getHouses');
    
    if (response.status !== 200) return "";
	const body = await response.json();
    return body;
  }
  
  getPoints = async() => {
    const response = await fetch('/api/getPoints');
    
    if (response.status !== 200) return "";
	const body = await response.json();
    return body;
  } 
  
  
  getProfessors = async() => {
    const response = await fetch('/api/getProfessors');
    
    if (response.status !== 200) return "";
	const body = await response.json();
    return body;
  } 

  componentDidMount() {
    this.getHouses()
      .then(res => {
        const houses = res.houses;
        this.setState({ houses: houses });
      })
	  
	  this.getProfessors()
      .then(res => {
        const professors = res.professors;
        this.setState({ professors: professors });
      })
	  
	this.getPoints()
      .then(res => {
		  
		  let calPoints = {};
		  if(res.points){
			  
			  res.points.map((point, i) => {     
				
				//if(point){
					console.log(point.nb_points);
					calPoints[point.id_house] = calPoints[point.id_house] ? (parseInt(calPoints[point.id_house]) + parseInt(point.nb_points)) : parseInt(point.nb_points)
					
				//}
			  })
		  }
		  
        const newpoints = calPoints;
        this.setState({ points: newpoints });
      })
  }

  render() {
    const { houses } = this.state;
	const { points } = this.state;
	const { professors } = this.state;

    return (
      <Container maxWidth='lg' >
      <Box>
        <Header />
      </Box>
      <Box m={3} p={2}>
        <Grid container spacing={4} p={2}>
		  {houses ? houses.map(item => <House key={item.id} name={item.name} professors={professors} points={points} id={item.id} />) : ""} 
        
        </Grid>
      </Box>
    </Container>
    );
  }
}

export default App;