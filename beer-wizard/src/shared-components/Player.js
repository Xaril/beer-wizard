import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (
        <div 
            style={{flex: 1}}>
            <h3>{this.props.name}</h3>
          </div>
        );
    }
}

export default Player;
