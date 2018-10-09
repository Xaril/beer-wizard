import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = (rootState) => {
    var user = rootState.user.read;
    return {
        user: user.data.player,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
