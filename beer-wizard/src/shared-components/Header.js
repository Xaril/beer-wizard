import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div style={{backgroundColor:'white', position:'sticky', top:0, justifyContent: 'center', display:'flex'}}>
            <h1>
                {this.props.header}
            </h1>
        </div>
        );
    }
}

export default Header;
