import Login from './Login';
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
        register: (name, password) => dispatch(register(name, password)),
        login: (name, password) => dispatch(login(name, password)),
        getUser: (name) => dispatch(getUser(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
