import Home from './Home';
import { connect } from 'react-redux';
import {register, login, getUser} from '../../store/user/read/readDucks';

const mapStateToProps = (rootState) => {
    var user = rootState.user.read;
    return {
        user: user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: () => dispatch(register()),
        login: (name, password) => dispatch(login(name, password)),
        getUser: () => dispatch(getUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
