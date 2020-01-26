import React, { Component } from 'react';
import '../App.css';
import { Box, makeStyles, Container, Grid,Typography } from '@material-ui/core';
import Header from './Header';
import House from './House';


class App extends Component {
  state = {
    houses: '',
	points: ''
  }

  getHouses = async() => {
    const response = await fetch('/api/getHouses');
    const body = await response.json();
    if (response.status !== 200) return "";

    return body;
  }
  
  getPoints = async() => {
    const response = await fetch('/api/getPoints');
    const body = await response.json();
    if (response.status !== 200) return "";

    return body;
  } 

  componentDidMount() {
    this.getHouses()
      .then(res => {
        const houses = res.houses;
        this.setState({ houses: houses });
      })
	  
	this.getPoints()
      .then(res => {
		  
		  let calPoints = {};
		  if(res.points){
			  
			  res.points.map((point, i) => {     
           
				if(point){
					calPoints[point.id_house] = calPoints[point.id_house] ? (calPoints[point.id_house] + point.nb_points) : point.nb_points
				}
			  })
		  }
		  
        const points = calPoints;
        this.setState({ points: points });
      })
  }

  render() {
    const { houses } = this.state;
	const { points } = this.state;

    return (
      <Container maxWidth='lg' >
      <Box>
        <Header />
      </Box>
      <Box m={3} p={2}>
        <Grid container spacing={4} p={2}>
		  {houses ? houses.map(item => <House key={item.id} name={item.name} points={points} id={item.id} />) : ""} 
        
        </Grid>
      </Box>
    </Container>
    );
  }
}

export default App;