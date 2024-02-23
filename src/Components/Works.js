import React from 'react'
import './Works.css'

const Works = () => {
  return (
    <div className='works'>
      <h1 className='work-h1'>Projects :</h1>
      <div>
     <a href='https://github.com/GopichanduBattula/Employee-Management-System'><img src='https://5.imimg.com/data5/JK/NE/BF/SELLER-15653350/employee-benefits-management-service-500x500.jpg' 
        className='work-img1'
        /> <br/><h1 className='work-h2'>Employee Management System</h1></a> 
      </div>

      <div>
        <a href='https://github.com/GopichanduBattula/Online-Banking-System'><img src='https://th.bing.com/th/id/OIP.ktg1MkyDZCNaOEWPBJ0J6QAAAA?rs=1&pid=ImgDetMain'
      className='work-img2' />
        <h1 className='work-h3'>Online Banking System</h1></a>
      </div>
      </div>
  )
}

export default Works