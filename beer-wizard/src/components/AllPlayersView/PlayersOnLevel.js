import React, { Component } from 'react';
import Player from '../../shared-components/Player';

class PlayersOnLevel extends Component {
    render() {
        return (
        <div>
            <h2>{this.props.level}</h2>
            {
                this.props.players.map((player, index) => (
                    <Player name={player.name} key={index}/>
                ))
            }
          </div>
        );
    }
}

export default PlayersOnLevel;
