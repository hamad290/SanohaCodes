import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pq.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../../assets/web developer.pdf'
const Hero = () => {
  return (
    <div id='home'className='hero'>
      <img src={profile_img}alt=''/>
      <h1><span>I am Hammad,</span> Frontend developer based in Pakistan.</h1>
    <p>I am a Frontend developer from Islamabad,Pk with 5 year of experience in multiple companies like J-Telemarketing, GreatStack</p>
    <div className='hero-action'>
  <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
  <a href={Resume}  target='_blank' rel='noopener noreferrer' >
          <div className='hero-resume'>My Resume</div>
        </a>
    </div>
    </div>
  )
}

export default Hero