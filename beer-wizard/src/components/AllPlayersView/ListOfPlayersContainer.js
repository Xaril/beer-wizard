import ListOfPlayers from './ListOfPlayers';
import { connect } from 'react-redux';
import {getAllPlayers} from '../../store/players/read/readDucks';

const mapStateToProps = (rootState) => {
    var players = rootState.players.read;
    return {
        players: players,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(getAllPlayers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfPlayers);
