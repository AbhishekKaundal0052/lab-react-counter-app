import React from 'react'
import { useState } from 'react'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props) 
     this.state = {
    count: 0
  };
  }
Increment(){
  this.setState({
    count: this.state.count +1
  })
}
Decrement(){
  this.setState({
    count: this.state.count -1
})
}
Reset(){
  this.setState({
    count: this.state.count = 0
  })
}
render(){
  return (
    <>
    <h1>COUNTER APP</h1>
      <div className="card">
      <p>count is {this.state.count}</p>
        <button onClick={() => this.Increment()}>
          +
        </button>
        <button onClick={()=> this.Decrement()}>
          -
        </button>
        <button onClick={()=> this.Reset()}>
          Reset
        </button>
        </div>
    </>
  )
}
  }

// export default Class App extends Component
export default App
