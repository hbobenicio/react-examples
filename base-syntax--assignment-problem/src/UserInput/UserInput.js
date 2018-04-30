import React from 'react'

const userInput = (props) => (
  <div className="UserInput card">
    <div className="card-body mx-auto">
      <input type="text" placeholder="UserInput"
        value={props.username}
        onChange={props.usernameChange} />
    </div>
  </div>
)

export default userInput
