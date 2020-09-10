import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './components/Validation';
import Character from './components/Character';

class App extends Component {

  state = {
    word: []
  }

  changeHandler = (event) => {
    const text = event.target.value;
    this.setState({word: [...text]});
  }

  clickHandler = (event, index) => {
    const word = [...this.state.word];
    word.splice(index, 1);
    this.setState({word: [...word]});
  }

  render() {

    let separateBox = null;

    separateBox = (
      <div> 
      {this.state.word.map( (item,i) => {
        return (
          <Character 
            text = {item}
            click = {(event) => this.clickHandler(event, i)}
          />
        )
      })}
      </div>
    )
    
    
    
    
    
    


    return (
      <div>
        <h1> {this.state.word.length} </h1>

        <input 
          type = "text"
          onChange = {this.changeHandler}
        />

        <Validation 
          length = {this.state.word.length}
        />
        
        {separateBox}

      </div>


      
    );
  }
}
export default App;
