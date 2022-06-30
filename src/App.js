import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      monsters: [
        {
          id:1,
          name: "Mike"
        },
        {
          id:2,
          name: "Dave"
        },
        {
          id:3,
          name: "Linda"
        },
        {
          id:4,
          name: "Kegin"
        }
      ]
      };
    }

    render() {
      return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
          )
        })}
      </div>
    );
    }

  }

export default App;
