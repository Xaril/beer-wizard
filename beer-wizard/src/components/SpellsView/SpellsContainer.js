import Spells from './Spells';
import { connect } from 'react-redux';
import {getAllSpells} from '../../store/spells/read/readDucks';

const mapStateToProps = (rootState) => {
    var spells = rootState.spells.read;
    return {
        spells: spells,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => dispatch(getAllSpells()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
