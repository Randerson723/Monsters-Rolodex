import './App.css';
import React, {Component} from 'react';
import {CardList} from'./components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
        monsters: [],
        searchField: ''
    };

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
/**Arrow function above binds (this) to state and makes binding the 
 * function above below the constructor unnecessary---> makes context what we expect it to be and 
 * makes for shorter and cleaner code */  
  
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder="search monsters" 
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
    

}

export default App;
