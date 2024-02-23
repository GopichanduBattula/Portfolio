import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skill'>
      <h1 className='skill-h1'>Skills :</h1>
      <h2 className='skill-h2'>These are the technologies I've worked with:</h2>

      <div className='container'>
        <div className='row'>
        <div className='column'>
        <img src='https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png' className='skill-img1' />
       <div className='skill-imgtext'>JAVA</div>
        </div>

        <div className='column'>
        <img src='https://konsultanitbandung.net/wp-content/uploads/2020/09/spring-3-logo-png-transparent-300x300.png' className='skill-img2'/>
        <div>Spring Boot</div>
        </div>

        <div className='column'>
        <img src='https://clipground.com/images/html5-png-image-10.png' className='skill-img3'/>
        <div>HTML</div>
        </div>
        </div>

         <div className='row'>
        <div className='column'>
        <img src='https://logospng.org/download/css-3/logo-css-3-2048.png' className='skill-img4'/>
        <div>CSS</div>
        </div>

        <div className='column'>
        <img src='https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png' className='skill-img5'/>
        <div>JavaScript</div>
        </div>
       
        <div className='column'>
        <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png' className='skill-img6'/>
        <div>React Js</div>
        </div>

        <div className='column'>
        <img src='https://img.pngloc.com/download/2202/GitHub_tofoe0743.png' className='skill-img7'/>
        <div>GitHub</div>
        </div>
      </div>

      
      </div>
      </div>
  )
}

export default Skills