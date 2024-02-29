import React from 'react'
import { NavLink } from 'react-router-dom'

const Buttons = ({ children, style}) => {
  return (
    <div>
      <NavLink
      to="https://chat.whatsapp.com/8DxFlE14fO21PxMQcTOfoh"
      target="_blank"
      >
        <button className='blackButton' style={style}>
          {children}
        </button>
      </NavLink>
    </div>
  )
}

export default Buttons;

