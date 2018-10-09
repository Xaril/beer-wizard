import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfPlayersContainer from './AllPlayersView/ListOfPlayersContainer';
import LoginContainer from './LoginView/LoginContainer';
import SpellsContainer from './SpellsView/SpellsContainer';
import HomeContainer from './HomeView/HomeContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {

    render() {
        if (!this.props.loggedIn) {
            return <LoginContainer />
        }

        return (
          <Router>
            <div style={{backgroundColor:'#d3d3d3'}}>
                <div style={{minHeight: '100vh'}}>
                    <Route exact path="/" component={HomeContainer}/>
                    <Route path="/players" component={ListOfPlayersContainer}/>
                    <Route path="/spells" component={SpellsContainer}/>
                </div>
              <div style={{backgroundColor:'#4647e8', position:'sticky', bottom:0, padding: '3%', justifyContent: 'center', display:'flex'}}>
                <Link to="/players">
                  <button style={{color:'#FFFFFF', backgroundColor:'#5758f9'}} type="button">Players</button>
                </Link>

                <Link to="/">
                  <button style={{color:'#FFFFFF', backgroundColor:'#5758f9'}} type="button">Home</button>
                </Link>

                <Link to="/spells">
                  <button style={{color:'#FFFFFF', backgroundColor:'#5758f9'}} type="button">Spells</button>
                </Link>
              </div>

            </div>
          </Router>
        );
    }
}

export default App;
