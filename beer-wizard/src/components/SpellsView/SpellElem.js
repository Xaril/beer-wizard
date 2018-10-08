import React, { Component } from 'react';

class SpellElem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const spell = this.props.spell;
        return (
            <div style={{

            }}>
                <div style={{
                    textAlign: 'center',
                    fontSize: 22,
                }}>
                    {spell.level}
                </div>
                <div style={{
                    textAlign: 'center',
                    fontSize: 20,
                }}>
                    {spell.name}
                </div>
                <div>
                    {spell.description}
                </div>
            </div>
        );
    }
}

export default SpellElem;
