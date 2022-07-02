import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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

    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField }
      })
    }

    render() {
      const { monsters, searchField } = this.state;
      const { onSearchChange } = this;
      const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })


      return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange} 
          classname='monsters-search-box' 
          placeholder='Search Cat Friends'
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
    }

  }

export default App;
