import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions/index';

const signInAction = Actions.signInAction;


const styles = {
  linkStyle: {
    paddingLeft: '20px',
    paddingRight: '20px',
    float: 'left',
    height: '31px',
    width: 'fit-content',
    color: '#2c3e50',
    borderLeft: 0,
    borderBottom: 0,
    border: '1px solid',
    paddingTop: '15px',
    borderColor: '#7f8c8d',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#ffff',
    '&:last-child': {
      borderTopRightRadius: '25px',
    },
  },
  buttonContainer: {
    margin: 'auto',
    marginBottom: '20px',
    width: '50%',
  },
  container: {
    borderRadius: '10px',
    width: '400px',
    background: '#3d628f',
    height: 'fitContent',
    paddingTop: '30px',
    margin: 'auto',
    boxShadow: '0 0 50px grey',
  },
  sign: {
    background: '#2c3e50',
    color: 'white',
    width: '100%',
    height: '100%',
    fontSize: '25px',
    marginTop: '10%',
    outline: 'none',
  },
  signActive: {
    composes: '$sign',
    background: '#27ae60',
  },
  main: {
    height: '89vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    background: '#ecf0f1',
  },
  label: {
    width: '30%',
    marginLeft: '5%',
    color: '#ecf0f1',
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

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: '',
      similar: false,
    };
    this.updateNickname.bind(this);
    this.updatePassword.bind(this);
    this.click.bind(this);
  }

  updateNickname = (e) => {
    this.setState({ nickname: e.target.value });
    if ((e.target.value !== '') && (this.state.password !== '')) {
      this.setState({ similar: true });
    } else {
      this.setState({ similar: false });
    }
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
    if ((e.target.value !== '') && (this.state.nickname !== '')) {
      this.setState({ similar: true });
    } else {
      this.setState({ similar: false });
    }
  };

  click = () => {
    if (this.state.similar) {
      this.props.onSignInClick(this.state.nickname, this.state.password);
    } else { alert('Please enter Password or Nickname!'); }
  }

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
          <div className={classes.buttonContainer}>
            <button
              className={(this.state.similar ?
                classes.signActive :
                classes.sign)}
              onClick={this.click}
            >
            Sign in
            </button>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSignInClick: PropTypes.func,
  sessionId: PropTypes.string,
};

export default connect(
  () => ({}),
  dispatch => ({
    onSignInClick: (nickname, password) => {
      dispatch(signInAction(nickname, password));
    },
  })
)(injectSheet(styles)(LoginForm));
