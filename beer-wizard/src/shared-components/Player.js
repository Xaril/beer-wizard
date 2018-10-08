import React, { Component } from 'react';

class Player extends Component {
    render() {
        return (
        <div
            style={{flex: 1, padding:'1% 0% 1% 4%', margin:'1px',backgroundColor:'#e85d8c'}}>
            <h3 style={{color:'#000000'}}>{this.props.name}</h3>
          </div>
        );
    }
}

export default Player;
