import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = (rootState) => {
    var user = rootState.user.read;
    var loggedIn = false;
    if (user.status === "OK") {
        loggedIn = true;
    }
    return {
        loggedIn: loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
