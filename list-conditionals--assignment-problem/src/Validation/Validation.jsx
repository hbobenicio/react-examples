import React from 'react'

const tooShort = text => text.length < 5 

const validation = (props) => {
  const validationText = tooShort(props.text) ?
    <span>Text too short</span> :
    <span>Text long enough</span>

  return validationText
}

export default validation
