import Home from './Home';
import { connect } from 'react-redux';

const mapStateToProps = (rootState) => {
    var user = rootState.user.read;
    return {
        user: user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
