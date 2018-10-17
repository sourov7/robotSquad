import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import "tachyons";
// Component 
//  import Card from "./Components/Card";
import CardList from "./Components/CardList" ;
import { robots } from './robots.js';
import Searchbox from "./Components/Searchbox";
import Scroll from "./Components/Scroll";
// Component 

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => {
        return Response.json()
      })
      .then(user => {
        return this.setState({ robots: user })
      })

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return (robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
    })


    if (robots.length === 0) {
      return (
        <h1>Loading</h1>
      )
    }
    else {
      return (
        <div className="tc">
          <div  className = "clear" >
            <h1 className=" titleName f1 ">Robot Squad </h1>
            <Searchbox SearchChange={this.onSearchChange} />
          </div>
                 
          <Scroll >
            <CardList robots={filterRobots} />
          </Scroll>

        </div>
        // <div className="tc">

        //  <div id = 'parent'>
        //  <h1 className=" titleName f1">Robot Squad </h1>
        //   <Searchbox SearchChange={this.onSearchChange} />
        //  </div>
        //  <div id ='child'>
        //  <Scroll>
        //     <CardList robots={filterRobots} />
        //   </Scroll>
        //  </div>

        // </div>
      );
    }
  }
}

export default App;
