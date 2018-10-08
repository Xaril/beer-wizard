import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfPlayersContainer from './AllPlayersView/ListOfPlayersContainer';
import HomeContainer from './HomeView/HomeContainer'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {

    render() {
        return (
          <Router>
            <div>
              <Route exact path="/" component={HomeContainer}/>
              <Route path="/players" component={ListOfPlayersContainer}/>
              <Route path="/spells" component={ListOfPlayersContainer}/>

              <div
                style={{backgroundColor:'white', position:'fixed', bottom:0, right: 0, left: 0}}>
                <Link to="/players">
                  <button type="button">Players</button>
                </Link>

                <Link to="/">
                  <button type="button">Home</button>
                </Link>

                <Link to="/spells">
                  <button type="button">Spells</button>
                </Link>
              </div>

            </div>
          </Router>
        );
    }
}

export default App;
