import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/userActions';
import {useDispatch } from 'react-redux';
const Navbar = () => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' ,margin:'0' }}
    >
      <CDBSidebar toggled={'true'} textColor="greenyellow" backgroundColor="black">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/home"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            MENU
          </a>
        </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
         
      <CDBSidebarMenu>
        <NavLink  to="/home" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
        </NavLink>
        <NavLink  to="/myprofile" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="user">View Profile</CDBSidebarMenuItem>
        </NavLink>
        <NavLink to="/myprofile/update/password" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="key">Change Password</CDBSidebarMenuItem>
        </NavLink>
        <NavLink  to="/myprofile/update" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="user-edit">Update Profile</CDBSidebarMenuItem>
        </NavLink>
       <NavLink to="/search" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
       </NavLink>
       <NavLink to="/libraryrules" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="scroll">Library rules</CDBSidebarMenuItem>
       </NavLink>
       <NavLink to="/transactions" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="clipboard-list">Transaction Details</CDBSidebarMenuItem>
       </NavLink>
       <NavLink  to="/contactpage" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="envelope">Contact Library</CDBSidebarMenuItem>
       </NavLink>
       <NavLink onClick={logoutHandler} activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
       </NavLink>
    
      </CDBSidebarMenu>
      
      </CDBSidebarContent>
      </CDBSidebar>
    </div>
  )
}

export default Navbar
