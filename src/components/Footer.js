import React from 'react'
import logo from '../assets/images/logo.svg'
import twitter from "../assets/images/icon-twitter.svg"
import youtube from "../assets/images/icon-youtube.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"
import facebook from "../assets/images/icon-facebook.svg"
import Button from './Button'
const Footer = () => {
    const socials =[ twitter, youtube,pinterest,instagram,facebook]
  return (
   <>
    <div className='footer'>
      <div className='Footer-left'>
        <div className='socials'>
            <div className='logo'>
               <img src={logo} alt='logo' className='footerLogo'/>
            </div>
           {
            socials.map((social,index)=>(
               <img src={social} alt='socialMedia' className='social-icon' key={index}/>
            ))
           }
        </div>
        <div className='footer-nav'>
           <ul className='footer-navlist'>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
           </ul>
        
        </div>
        <div className='footer-nav'>
           <ul className='footer-navlist'>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
           </ul>
        
        </div>
      </div>
      <div className='footer-right'>
           <Button children={"Request Invite"} />
           <h1>EasyBank. All rights Reserved.</h1>
      </div>

      
    </div>
    <div className='credit'>
         <p>Design Challenge by Frontend Mentor.io. Redesigned and coded by Aishat Muhammed.</p>
     </div>
   </>
  )
}

export default Footer