import React from 'react'
import './Header.css'

const header = () => {
  const appName = 'React App'

  return (
    <header id="app-header">
      <h1>Hi, I'm a {appName}</h1>
    </header>
  )
}

export default header
