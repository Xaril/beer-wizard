import React, { Component } from 'react';
import PlayersOnLevel from './PlayersOnLevel';
import _ from 'lodash'
import Header from '../../shared-components/Header';

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
        console.log(this.props);
        //this.props.load();
    }
    render() {
        var loading = this.props.players.status === "UPDATING";
        if (loading){
            return <h3>FETCHING</h3>
        } else {
            var sortedListObject = _.groupBy(players, "level");
            return (
                <div>
                    <Header header="Players"/>
        
                    {Object.keys(sortedListObject).map((level, index) => {
                        return <PlayersOnLevel level={level} players={sortedListObject[level]} key={index} />
                        
                    })}
                    </div>
                );
        }
        
    }
}

export default ListOfPlayers;
