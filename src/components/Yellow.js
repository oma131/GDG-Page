import React from 'react'
import vector from '../assets/Vector.svg'
import { NavLink } from 'react-router-dom'

const Yellow = () => {
    return (
      <NavLink
      to="https://gdg.community.dev/events/details/google-gdg-port-harcourt-presents-international-women-day/"
      target="_blank"
      >
        <button className='yellowButton' >
            Learn More
            <span className='vec1'>
              <img src={vector} className="vector1" alt="button vector" />
            </span>
        </button>
      </NavLink>
    )
  }

export default Yellow

