import React, { Component } from 'react';
import PlayersOnLevel from './PlayersOnLevel';
import _ from 'lodash'
import Header from '../../shared-components/Header';

class ListOfPlayers extends Component {
    componentDidMount() {
        this.props.load();
    }
    render() {
        var loading = this.props.players.status === "UPDATING";
        if (loading){
            return <h3>FETCHING</h3>
        } else {
            console.log("HEERE")
            var sortedListObject = _.groupBy(this.props.players.data.players, "level");
            console.log(sortedListObject);
            return (
                <div style={{backgroundColor:'#d3d3d3'}}>
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
