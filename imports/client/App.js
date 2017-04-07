import React, { Component } from 'react';



export class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }
  headingClick(){
    this.setState({count: this.state.count + 1});
  }
  render(){
    return (
      <h1 onClick={this.headingClick.bind(this)}>
        <Heading count={this.state.count} />
      </h1>
    );
  }
}

class Heading extends Component {
  render() {
    return(
      <h1>{this.props.count}</h1>
    );
  }
}
