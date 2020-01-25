import React, { Component } from 'react';
import '../App.css';
import { Box, makeStyles, Container, Grid,Typography } from '@material-ui/core';
import Header from './Header';
import Gryffindor from './Gryffindor';


class App extends Component {
  state = {
    renderedResponse: ''
  }

  getResponse = async() => {
    const response = await fetch('/api/getStudents');
    const body = await response.json();
	console.log("body");
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res.students[0].firstname;
        this.setState({ renderedResponse: someData });
      })
  }

  render() {
    const { renderedResponse } = this.state;

    return (
      <Container maxWidth='lg' >
      <Box>
        <Header />
      </Box>
      <Box m={3} p={2}>
        <Grid container spacing={4} p={2}>
        <Gryffindor />
          {/* 
          <Hufflepuff />
          <Ravenclaw />
          <Slytherin /> */}
        </Grid>
      </Box>
    </Container>
    );
  }
}

export default App;