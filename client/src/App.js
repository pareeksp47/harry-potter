import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <h2>Call out to API!</h2>
        <p>{renderedResponse}</p>
      </div>
    );
  }
}

export default App;