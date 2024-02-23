import React from 'react'
import './About.css'

const About = () => {
  return (
    
<div className='about'>
  <h1 className='h1'><strong >About Me,</strong></h1>
<p>
  <h2 className='h2'>I'm a curiosity-driven Front-End Developer with design chops.<br/><br/>
I am passionate about bringing both the technical and visual aspects of digital products to life.<br/><br/>
User experience, writing clean and accessible code matters to me, and I sweat for the detail.<br/><br/>
I'm happiest when I'm creating, learning, exploring, reading and thinking about how to make things better.</h2>
</p>

<div className='about-link' >
  Have a look at my &nbsp; &nbsp; <a href='http://localhost:3000/skills'><mark className='mark-link'>Skills</mark></a> &nbsp;&nbsp; and  &nbsp; &nbsp;  
   <a href='http://localhost:3000/works'><mark className='mark-link'>Projects </mark></a> 
  &nbsp; &nbsp;  and &nbsp; &nbsp; <a href='http://localhost:3000/contact'><mark className='mark-link'>Contact</mark></a> .
</div>

      </div>
      
  )
}

export default About