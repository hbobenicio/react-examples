import React, { Component } from 'react';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernameFulano: 'Fulano',
    usernameCicrano: 'Cicrano'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      usernameFulano: event.target.value,
      usernameCicrano: event.target.value
    })
  }

  render = () => {
    return (
      <div className="App">
        <div className="container">

          <div className="row">
            <div className="col">
              <UserInput
                username={this.state.usernameFulano} usernameChange={this.usernameChangedHandler} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <UserOutput username={this.state.usernameFulano}/>
            </div>
            <div className="col">
              <UserOutput username={this.state.usernameCicrano}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
