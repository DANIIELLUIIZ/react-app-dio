import React from 'react'
import './result.css'

export default function result() {
  return (
    <div className="result-container">
      <img
        src="https://avatars.githubusercontent.com/u/101511389?v=4"
        alt="imageprofile"
      ></img>

      <div className="information-container">
        <h2 className="user-name">Daniel Freitas</h2>
        <span>@daniielluiiz</span>

        <p>
          Full Stack Developer web and mobile, passionate to javascript and all
          your ecosystem.
        </p>
      </div>
    </div>
  )
}
