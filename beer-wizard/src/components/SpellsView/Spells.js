import React, { Component } from 'react';
import Header from '../../shared-components/Header';
import SpellElem from './SpellElem';

class Spells extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.load();
    }

    render() {
        if (this.props.spells.status !== 'OK') {
            return (
                <div>
                    <Header header="Spells" />
                    <div style={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'center',
                        fontSize: 22,
                    }}>
                        LOADING...
                    </div>
                </div>
            );
        }

        const spells = this.props.spells.data.spells;

        const spellElems = spells.map(spell => <SpellElem spell={spell} key={spell.level}/>)

        return (
            <div>
                <Header header="Spells" />
                {spellElems}
            </div>
        );
    }
}

export default Spells;
