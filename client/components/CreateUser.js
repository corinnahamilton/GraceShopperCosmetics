import React from 'react';
import { connect } from 'react-redux';
import { createUser } from '../store/createUser';

export class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', //???
      password: '', // ???
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      email: '',
      password: '',
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (props) => dispatch(createUser(props)),
});

export default connect(null, mapDispatchToProps)(CreateUser);
