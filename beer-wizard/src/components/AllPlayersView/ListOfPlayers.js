import React, { Component } from 'react';
import PlayersOnLevel from './PlayersOnLevel';
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
        level: 3
    },
    {
        name: "Erik",
        level: 3
    },
    {
        name: "Pelle",
        level: 3
    },
    {
        name: "Anton",
        level: 3
    },
    {
        name: "Erik",
        level: 3
    },
    {
        name: "Pelle",
        level: 3
    },
    {
        name: "Anton",
        level: 3
    },
    {
        name: "Erik",
        level: 3
    },
    {
        name: "Pelle",
        level: 3
    },
    {
        name: "Anton",
        level: 4
    },
    {
        name: "Erik",
        level: 4
    },
    {
        name: "Pelle",
        level: 5
    },
    {
        name: "Erik",
        level: 5
    },
    {
        name: "Pelle",
        level: 5
    },
    

]
class ListOfPlayers extends Component {
    componentDidMount() {
        console.log("did mount");
        console.log(this.props);
        this.props.load();
    }
    render() {
        var sortedListObject = _.groupBy(players, "level");
        
        return (
        <div>
            <div style={{backgroundColor:'white', position:'fixed', top:0, right: 0, left: 0, padding: 5}}>
                <h1>
                    Players
                </h1>
            </div>
            

            {Object.keys(sortedListObject).map((level) => {
                return <PlayersOnLevel level={level} players={sortedListObject[level]}/>
                
            })}
          </div>
        );
    }
}

export default ListOfPlayers;
