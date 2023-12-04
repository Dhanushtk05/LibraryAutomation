import {useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LayoutFooter from '../Layouts/LayoutFooter';
import LayoutHead from '../Layouts/LayoutHead';
import './Profile.css'
export default function Profile () {
    const { user }  = useSelector(state => state.authState);

    return (
        <div id='profilepage'>
            <div><LayoutHead/></div>
            <div id='prohead'><h1>Profile</h1></div>
          <div className="row justify-content-around mt-5 user-info">
              <div className="col-6 col-md-3">
                  <figure className='avatar avatar-profile'>
                     <img className="rounded-circle img-fluid" src={user.avatar??'./images/default_avatar.png'} alt='' />
                  </figure>
                  <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                     Edit Profile
                  </Link>
              </div>
    
             <div className="col-8 col-md-5">
                  <h4>Full Name</h4>
                  <p>{user.name}</p>

                  <h4>Register Number</h4>
                  <p>{user.regno}</p>
      
                  <h4>Email Address</h4>
                  <p>{user.email}</p>

                  <h4>Joined</h4>
                  <p>{String(user.joinedAt ).substring(0, 10)}</p>
                  <Link to="/myprofile/update/password" id='change_pass' className="btn btn-primary btn-block mt-3">
                     Change Password
                 </Link>
             </div>
          </div>
          <div><LayoutFooter/></div>
        </div>
    )
}