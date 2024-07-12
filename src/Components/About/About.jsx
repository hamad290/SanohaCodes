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
<p>As a dedicated web developer, I specialize in crafting dynamic and visually stunning websites using technologies like WordPress,
Angular, and Laravel PHP APIs. With expertise in HTML5, CSS3, and JavaScript, TypeScript, I excel in custom theme development and
building robust web applications. My proficiency extends to integrating RESTful APIs into Angular applications and creating scalable
solutions with Laravel PHP APIs. I consistently deliver tailored solutions that exceed client expectations. .</p>
</div>
<div className='about-skills'>
<div className='about-skill'><p>HTML/CSS</p><hr style={{width:"`100%"}}/></div>
<div className='about-skill'><p>Java Script</p><hr style={{width:"70%"}}/></div>
<div className='about-skill'><p>React</p><hr style={{width:"60%"}}/></div>
<div className='about-skill'><p>Angular</p><hr style={{width:"50%"}}/></div>
</div>
  </div>
    </div>

<div className='about-achievements'>
    <div className='about-achievement'>
  <h1>5+</h1>
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