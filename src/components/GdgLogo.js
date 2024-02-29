import React from 'react'
import logo from '../assets/logo.png';

const GdgLogo = () => {
  return (
    <div className='logoContainer'>
        <div className='logoWrapper'>
            <img src={logo} className="appLogo" alt="logo" />
        </div>
        <p className='logoText'>GDG Port Harcourt</p>
    </div>
  )
}

export default GdgLogo