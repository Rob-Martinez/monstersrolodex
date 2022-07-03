// import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {


  const [searchField, setSearchField] = useState(''); // [] array destructing is [value, setValue] and useState(''); is empty to start and changes as info is intered in the searchbox
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return(
    <div>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className='monsters-search-box' 
        placeholder='Search Monsters'
      />
      <CardList monsters={ filteredMonsters }/>

    </div>
  );
  
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { 
//       monsters: [],
//       searchField: '',
//       };
//     }

//     // This lifecycle mount grabs the data asynchronously from the api then is ran after the initial render.
//     componentDidMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(resp => resp.json())
//       .then((users) => this.setState(() => {
//         return {monsters: users}
//       },
//       () => {console.log(users)}
//       ))
//     }

//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
//       this.setState(() => {
//         return { searchField }
//       })
//     }

//     render() {
//       const { monsters, searchField } = this.state;
//       const { onSearchChange } = this;
//       const filteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchField)
//       })


//       return (
//       <div className="App">
//         <SearchBox
//           onChangeHandler={onSearchChange} 
//           classname='monsters-search-box' 
//           placeholder='Search Monster Friends'
//         />
//         <CardList monsters={ filteredMonsters }/>
//       </div>
//     );
//     }

//   }

export default App;
