import React from 'react'
import './Card.css'
function Card(props) {
    const styleClass = `Card ${props.className || ""}`;
  return (
  <div className={styleClass}>
 {props.children}
  </div>
  )
}

export default Card