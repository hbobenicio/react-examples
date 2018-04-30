import React from 'react'

const userOutput = (props) => (
  <div className="UserOutput card">
    <div className="card-header">
      { props.username }
    </div>
    <div className="card-body">
      <p>Foo</p>
      <p>Fighters</p>
    </div>
  </div>
)

export default userOutput
