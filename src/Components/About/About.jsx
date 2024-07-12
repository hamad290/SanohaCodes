import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/a.png'
const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
   <h1>About Us</h1>
   <img src={theme_pattern} alt=''/>
    </div>
    <div className='about-sections'>
  <div className='about-left'>
   <img src={profile_img}alt=''/>
  </div>
  <div className='about-right'>
<div className='about-para'>
<p>On Dec. 22, 1799, Sands told her cousins that she would be leaving to elope with a fellow boarder named Levi Weeks that night.</p>
<p>On Dec. 22, 1799, Sands told her cousins that she would be leaving to elope with a fellow boarder named Levi Weeks that night.</p>
</div>
<div className='about-skills'>
<div className='about-skill'><p>HTML/CSS</p><hr style={{width:"50%"}}/></div>
<div className='about-skill'><p>Java Script</p><hr style={{width:"70%"}}/></div>
<div className='about-skill'><p>React</p><hr style={{width:"60%"}}/></div>
<div className='about-skill'><p>Angular</p><hr style={{width:"50%"}}/></div>
</div>
  </div>
    </div>

<div className='about-achievements'>
    <div className='about-achievement'>
  <h1>10+</h1>
  <p>YEAR OF EXPERIENCE</p>
    </div>

<hr/>
<div className='about-achievement'>
  <h1>10+</h1>
  <p>PROJECTS COMPLETED</p>
    </div>
<hr/>
<div className='about-achievement'>
  <h1>15+</h1>
  <p>HAPPY CLIENTS</p>
    </div>

</div>

    </div>
  )
}

export default About