import ListOfPlayers from './ListOfPlayers';
import { connect } from 'react-redux';

const mapStateToProps = (rootState) => {
    console.log(rootState)
    var players = rootState.players.read;

    return {
        players: players,
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPlayers);
