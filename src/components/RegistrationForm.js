import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Actions from '../actions/index';

const registrationAction = Actions.registrationAction;


const styles = {
  buttonContainer: {
    margin: 'auto',
    marginBottom: '20px',
    width: '50%',
  },
  container: {
    borderRadius: '10px',
    width: '400px',
    background: 'var(--login-bg-color)',
    paddingTop: '30px',
    margin: 'auto',
  },
  sign: {
    background: 'var(--login-button-bg-color)',
    color: 'var(--login-button-color)',
    width: '100%',
    height: '100%',
    fontSize: '25px',
    marginTop: '10%',
    outline: 'none',
  },
  signActive: {
    composes: '$sign',
    background: 'var(--login-button-active-bg-color)',
  },
  main: {
    verticalAlign: 'center',
    height: '89vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    background: 'var(--bg-color)',
  },
  label: {
    width: '30%',
    marginLeft: '5%',
    color: 'var(--login-color)',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    marginLeft: '10%',
  },
  input: {
    width: '150px',
    outline: 'white',
    outlineWidth: '2px',
    outlineStyle: 'solid',
  },
};

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      repeatPassword: '',
      similar: false,
    };
    this.updateNickname.bind(this);
    this.updatePassword.bind(this);
    this.click.bind(this);
  }

  updateNickname = (e) => {
    this.setState({ nickname: e.target.value });
    if ((e.target.value !== '') &&
    (this.state.repeatPassword === this.state.password)) {
      this.setState({
        similar: true,
      });
    } else { this.setState({ similar: false }); }
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
    if ((this.state.repeatPassword === e.target.value) &&
    (this.state.nickname !== '')) {
      this.setState({
        similar: true,
      });
    } else { this.setState({ similar: false }); }
  };

  updateRepeatPassword = (e) => {
    this.setState({ repeatPassword: e.target.value });
    if ((e.target.value === this.state.password) &&
    (this.state.nickname !== '')) {
      this.setState({ similar: true });
    } else { this.setState({ similar: false }); }
  };

  click = () => {
    if (this.state.nickname === '') {
      alert('Nickname is required!');
    } else if (this.state.similar) {
      this.props.onSignInClick(this.state.nickname, this.state.password);
    } else { alert('Password are not similar!'); }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Nickname: </span>
            </div>
            <input
              className={classes.input}
              value={this.state.nickname}
              onChange={this.updateNickname}
            />
          </div>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Password: </span>
            </div>
            <input
              type="password"
              className={classes.input}
              value={this.state.password}
              onChange={this.updatePassword}
            />
          </div>
          <div className={classes.loginContainer}>
            <div className={classes.label}>
              <span>Repeat the password: </span>
            </div>
            <input
              type="password"
              className={classes.input}
              value={this.state.repeatPassword}
              onChange={this.updateRepeatPassword}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button
              className={(this.state.similar ?
                classes.signActive :
                classes.sign)}
              onClick={this.click}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSignInClick: PropTypes.func,
  sessionId: PropTypes.string,
};

export default connect(
  () => ({}),
  dispatch => ({
    onSignInClick: (nickname, password) => {
      dispatch(registrationAction(nickname, password));
    },
  })
)(injectSheet(styles)(RegistrationForm));
