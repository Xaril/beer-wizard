import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div style={{backgroundColor:'#4647e8', position:'sticky', top:0, justifyContent: 'center', display:'flex'}}>
            <h1 style={{color:'#FFFFFF'}}>
                {this.props.header}
            </h1>
        </div>
        );
    }
}

export default Header;
