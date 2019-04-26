import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p className="UserID">Username: {props.username}</p>
      <p> This is a UserOutput component! </p>
    </div>
  )
}

export default userOutput;