import { connect } from 'react-redux';
import { logoutUser } from '../user/actions';
import App from '../components/App';

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
