import React from 'react'

import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  validateUsername(username) {
    return username !== undefined && username.trim().length > 0
  }

  validateEmail(email) {
    return email !== undefined && email.trim().length > 0
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Awesome Form</legend>

            <div className="form-group">
              <label htmlFor="usernameInput">Username:</label>
              <input id="usernameInput" type="text" name="username"
                value={this.state.username} onChange={this.handleUsernameChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="emailInput">Email:</label>
              <input id="emailInput" type="email" name="email"
                value={this.state.email} onChange={this.handleEmailChange}
                required />
            </div>
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        <div className="form-data">
          <div>
            <b>Username:</b> {this.state.username}
          </div>
          <div>
            <b>Emails:</b> {this.state.email}
          </div>
        </div>
      </div>
    )
  }
}

export default Form