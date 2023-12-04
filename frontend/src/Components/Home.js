import React from 'react';
import Navbar from './Navbar';
import { logout } from '../actions/userActions';
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

  return (
    <div className='homepage'>
      <div className='sidehomenavbar'>
        <Navbar/>
      </div>
      <div className='homeheader'>
        <button className='logoutbtn' onClick={logoutHandler}>Logout</button>
      </div>

      <div className='homeprofile'>

        <div className='content'>

          <h2>CIT CSE LIBRARY</h2>

        </div>

        <div className='content1'>
          <h2>Use Library for&nbsp;<span className="typewriter"></span></h2>
        </div>
        
        <div className='content2'>
          <a href='#abouts'>
            <h2>Explore</h2>
          </a>
          
        </div>

      </div>


      <div className='aboutcontainer' id='abouts'>
        <div className='abtlib'>
          <h4>ABOUT</h4>
          <p>Welcome to cse Cit Library.This Library mainly consists of books related to computer science
            and also it has some maths and general books.Click search button to search the books in the library.
          </p>
          <button onClick={() => {navigate('/search')}}>SEARCH</button>
        </div>
        <div className='suggestion'>
          <h4>SUGGESTIONS</h4>
          <p>If you have any queries or suggestions you can send email to
            <span>csecitlib@gmail.com</span>.click contact button to send your quries.
          </p>
          <button onClick={() => {navigate('/contactpage')}}>CONTACT</button>
        </div>
        <div className='message'>
          <h4>Librarian's Message</h4>
          <p>Welcome to web OPAC of CIT cse Library . you can use the Web OPAC to search
            books related to Computer science and also some general books . user should follow
            the library rules.Click rule button to view the rules of the Library
          </p>
          <button onClick={() =>{navigate('/libraryrules')}}>RULES</button>
        </div>
      </div>
      <div className='homefooter'>
        <p><span>@CIT CSE LIBRARY</span>-Department of Computer science and Engineering</p>
      </div>
    </div>
  );
};


export default Home;
