import React, { Component } from 'react';
import PlayerName from './PlayerName';
import _ from 'lodash'


var players = [
    {
        name: "Fredrik",
        level: 1
    },
    {
        name: "Cristian",
        level: 1
    },
    {
        name: "Anton",
        level: 2
    },
    {
        name: "Erik",
        level: 2
    },
    {
        name: "Pelle",
        level: 2
    },
    
] 
class ListOfPlayers extends Component {

    render() {
        var sortedList = _.groupBy(players, "level");
        return (
        <div 
            style={{flex: 1}}>
            <h1>Players</h1>

            {players.map(player => (
                <PlayerName name={player.name}/>
            ))}
          </div>
        );
    }
}

export default ListOfPlayers;
