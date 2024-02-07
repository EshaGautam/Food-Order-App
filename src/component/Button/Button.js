import React from 'react'
import './Button.css'

function Button(props) {
  const styleBtn= `btn ${props.className || ""}`;
  return (
    <div><button type={props.type} onClick={props.onClick} className={styleBtn}>{props.children}</button></div>
  )
}

export default Button