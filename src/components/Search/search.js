import React from 'react'
import "./search.css"

export default function search() {
  return (
    <div className="input-container">
      <input placeholder="@usuário"></input>
      <button>Buscar</button>
    </div>
  )
}
