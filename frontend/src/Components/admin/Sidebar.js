import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions/userActions';
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
      <CDBSidebar toggled='true' textColor="yellowgreen" backgroundColor="black">
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
        <NavLink  to="/admin/dashboard" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="table">Dashboard</CDBSidebarMenuItem>
        </NavLink>
        <NavLink  to="/admin/books" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="book-reader">Books</CDBSidebarMenuItem>
        </NavLink>
        <NavLink to="/admin/book/create" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="book-medical">Add New Book</CDBSidebarMenuItem>
        </NavLink>

        <NavLink to="/admin/users" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="user">User Details </CDBSidebarMenuItem>
        </NavLink>

       <NavLink to="/admin/book/issue" activeClassName="activeClicked">
           <CDBSidebarMenuItem icon="clipboard-list">Issue Books</CDBSidebarMenuItem>
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
