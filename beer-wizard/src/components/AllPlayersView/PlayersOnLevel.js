import React, { Component } from 'react';
import Player from '../../shared-components/Player';

class PlayersOnLevel extends Component {
    render() {
        return (
        <div 
            style={{flex: 1}}>
            <h2>{this.props.level}</h2>
            {
                this.props.players.map(player => (
                    <Player name={player.name}/>
                ))
            }
          </div>
        );
    }
}

export default PlayersOnLevel;
