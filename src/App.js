import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import ToolBar from './components/ToolBar';
import NavBar from './NavBar'


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      messages: this.props.messages
    }
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className='conrtainer'>
          <ToolBar />
          <MessageList mesages={this.state.messages}/>
        </div>
      </div>
    );
  }
}

export default App;
