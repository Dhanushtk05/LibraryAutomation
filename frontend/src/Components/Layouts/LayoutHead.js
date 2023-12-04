import React from 'react'
import './LayoutHeader.css'
import { logout } from '../../actions/userActions';
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const LayoutHead = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
      navigate('/');
    }
  return (
    <div className='layouthead'>
        <button className='layouthome'onClick={()=>{navigate('/home')}}>Home</button>
        <button className='layoutlog'onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default LayoutHead
