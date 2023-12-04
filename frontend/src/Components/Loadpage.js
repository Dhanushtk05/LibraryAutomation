import React from 'react'
import './Loadpage.css'
import { useNavigate } from 'react-router-dom'

const Loadpage = () => {       
  const navigate = useNavigate();  
  return (
    <div className='loadbody'>
        <div className="loadheader">
          <img width="60px" alt='' src="/images/logo.png"/>
          <ul>
            <li onClick={() => {navigate('/register')}}>SIGNUP</li>
         </ul>
       </div>
       <div className="webtitle" id='titleweb'>
         <h1 id='text'>CIT CSE LIBRARY</h1>
         <h3 id='text1'>Welcome to Web OPAC of CSE LIBRARY of CIT</h3>
         <button onClick={() => {navigate('/login')}}  id='btn'>Login</button>
       </div>  

       
    </div>
  )
}

export default Loadpage
