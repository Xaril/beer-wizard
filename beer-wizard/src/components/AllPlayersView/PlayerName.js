import React, { Component } from 'react';

class PlayerName extends Component {
    render() {
        return (
        <div 
            style={{flex: 1}}>
            <h2>{this.props.name}</h2>
          </div>
        );
    }
}

export default PlayerName;
