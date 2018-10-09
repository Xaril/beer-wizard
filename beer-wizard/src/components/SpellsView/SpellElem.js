import React from 'react';

class SpellElem extends React.Component  {
    render() {
        const spell = this.props.spell;
        return (
            <div style={{margin:' 2.5% 7.5%', backgroundColor:'#FFFFFF'}}>
                <div style={{
                    textAlign: 'center',
                    fontSize: 22,
                    margin: '1px', padding: '1%', color: '#000000', backgroundColor:'#b2285f'
                }}>
                    {"Level " + spell.level + " - " + spell.name}
                </div>

                <div style={{textAlign: 'center', flex: 1, padding:'1%', margin:'1px',backgroundColor:'#e85d8c'}}>
                    {spell.description}
                </div>
            </div>
        );
    }
}

export default SpellElem;
