import Home from './Home';
import { connect } from 'react-redux';
import {register, login, getUser} from '../../store/user/read/readDucks';

const mapStateToProps = (rootState) => {
    var home = rootState.user.read;
    return {
        home: home,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: () => dispatch(register()),
        login: () => dispatch(login()),
        getUser: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
