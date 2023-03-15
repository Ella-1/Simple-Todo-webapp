import React, { Component } from "react";
import Ninjas from "./compo/ninjas";
import Ninjas2 from "./compo/ninjas2";
import AddNinja from "./compo/addninja";
import Forms  from "./compo/forms";

class App extends Component {
  state = {
    ninjas : [
      {name: 'bataz', age:30, belt:'black', id:1},
      {name: 'peace', age:35, belt:'blue', id:2},
      {name: 'faith', age:36, belt:'brown', id:3}
    ]

  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    // spread operator
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>welcome</p>
        
        
    <Ninjas ninjas={this.state.ninjas}/>
    {/* <Ninjas name="musa" age="25" belt="yellow"/>
    <Ninjas name="faith" age="26" belt="green"/> */}
    <Forms addNinja = {this.addNinja}/>
    
      </div>
    )
  }
}

export default App;