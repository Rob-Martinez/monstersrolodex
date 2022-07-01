import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      monsters: [],
      searchField: '',
      };
    }

    // This lifecycle mount grabs the data asynchronously from the api then is ran after the initial render.
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      },
      () => {console.log(users)}
      ))
    }

    render() {
      //  filteredMonsters is a new array of monsters using the filter method.
      //  This prevents the original monsters array from being changed.
      //  This allows us to filter the original list of monsters that include the searchField state string values.
      const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(this.state.searchField)
      })


      return (
      <div className="App">
        {/* this input takes the input values onChange event, and adds them to var searchField.
            but this infomation is only local until we include the this.setState() method 
            to update the searchField state. Everything is converted to lowecase so that there 
            is no case sensitivity on input. */}
        <input 
          className="search-box" 
          type="search"
          placeholder='Search'
          onChange={(event) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField }
            })
          }} />

          {/* We then map over the filtered monsters array rather than the original. 
          This way our data is updated when we delete values in the input box. */}
        {filteredMonsters.map((monster) => {
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
