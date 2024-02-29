import React from 'react'
import GdgLogo from './GdgLogo'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='footerContainer'>
            <div className='footerWrapper'>
                <div className='footerTop'>
                    <div className='section1'>
                        <div className='logoSection'>
                            <div className='footerLogoWrapper'>
                                <GdgLogo/>
                            </div>
                            <div className='logoPara'>
                            A collaborative hub for enthusiasts exploring Google and 
                            advanced software development technologies to learn, practice, 
                            and build innovative problem-solving applications.
                            </div>
                        </div>
                        <div className='linksSection'>
                            <h3 className='footerHead'>Links</h3>
                            <ul className='linksWrap'>
                                <li>About</li>
                                <li>Upcoming Events</li>
                                <li>Past Events</li>
                                <li>Team</li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                    </div>
                    <div className='socials'>
                        <div className='footerHead'>Follow Us</div>
                        <div className='socialIconWrapper'>
                            <div className='iconWrapper'>
                                <img src={linkedin} className="icons" alt="linkedin icon" />
                            </div>
                            <div className='iconWrapper'>
                                <img src={facebook} className="icons" alt="linkedin icon" />
                            </div>
                            <div className='iconWrapper'>
                                <img src={instagram} className="icons" alt="linkedin icon" />
                            </div>
                            <div className='iconWrapper'>
                                <img src={twitter} className="icons" alt="linkedin icon" />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='footerBottom'>
                    <hr className='hr-responsive'/>
                    <div className='footerClosing'>
                        &copy; 2024 GDG Port Harcourt Community
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer