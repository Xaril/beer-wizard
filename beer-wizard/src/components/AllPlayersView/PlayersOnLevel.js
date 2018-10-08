import React, { Component } from 'react';
import Player from '../../shared-components/Player';

class PlayersOnLevel extends Component {
    render() {
        return (
        <div style={{display:'flex', justifyContent: 'center',flex:1, margin:' 2.5% 7.5%', backgroundColor:'#FFFFFF'}}>
            <div style={{width:'100%'}}>
                <h2 style={{margin: '1px', padding: '0% 0% 0% 2%', display:'flex', flexGrow:1, color: '#000000', backgroundColor:'#b2285f'}}>{this.props.level}</h2>
                {
                    this.props.players.map((player, index) => (
                        <Player name={player.name} key={index}/>
                    ))
                }
            </div>
          </div>
        );
    }
}

export default PlayersOnLevel;
