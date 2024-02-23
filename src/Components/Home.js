import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import image from '../Images/Bgimage.jpeg'
import './Home.css'

const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${image})`}}>
    <div className='home-h1'>
      <h1>Hi,</h1>
      <h1>I'm Gopi Chandu Battula </h1>
      <h1>Web Developer</h1> 
      <h3>I have a serious passion for UI effects, 
         responsive designs,creating intuitive <br/>
         and dynamic user experiences.
      </h3>
      <h3 >Working with my hands to make magic happen on the internet.</h3>

      <h2 className='home-h2'>To know my social media accounts kindly click the below icons :</h2>
  <div className='home-link'>
  
  <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' 
 className='home-linkedin' ><IoLogoLinkedin /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href='https://github.com/GopichanduBattula/' className='home-git'><FaGithub /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href='https://mail.google.com/mail/u/0/#inbox' className='home-mail'><SiGmail /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href='https://twitter.com/?logout=1708324333183' className='home-twitter'><FaTwitter/></a>
      
</div>

<h2 className='home-h3'>To know more about me :&nbsp; &nbsp; <a href='http://localhost:3000/about'><mark style={{borderRadius:'10px', backgroundColor:'#ff99cc'}}>Click Here</mark></a></h2>
<div className='home-copy-right'><b>© 2024 GopiChanduBattula ™. All Rights Reserved.</b></div>
</div>
</div>
  )
}

export default Home




