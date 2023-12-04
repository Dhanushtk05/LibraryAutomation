import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const UpdateUser = () => {
    const [users,setUsers] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const { id:userId } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }
    
    useEffect(()=>{
        async function getuser(id){
            const data2 = await axios.get(`/api/v1/admin/user/getuser/${id}`)
            setUsers(data2.data.user)

        }
        getuser(userId)
    },[userId])

    useEffect(() => {
            setName(users.name);
            setEmail(users.email);
            setRole(users.role);
        
    },[users])
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name' , name);
        formData.append('email' , email);
        formData.append('role' , role);
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        await axios.put(`/api/v1/admin/user/putuser/${userId}`, formData, config);
        navigate('/admin/users')
    }
    
    
    return (
        <div className="row " >
            <div className="col-12 col-md-2" id='sidebar'>
                    <Sidebar/>
            </div>
            <div className='adminheader'>
              <button className='adbtn' onClick={logoutHandler}>LOGOUT</button>
              <h1>CIT CSE LIBRARY</h1>
            </div>

            <div className='row wrapper' id='update'>
            <div className="col-10 col-lg-5" >
                    
                        <form  onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                            <h1 className="mt-2 mb-4">Update User</h1>

                            <div className="form-group">
                            <label htmlFor="name_field">Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Email</label>
                                <input
                                type="text"
                                id="price_field"
                                className="form-control"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category_field">Role</label>
                                <select  value={role} onChange={e => setRole(e.target.value)} className="form-control" id="category_field">
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            >
                            UPDATE
                            </button>

                        </form>
                    
            </div>

            </div>
            <div className='adminfooter'><LayoutFooter/></div>
        </div>
        
    )
}

export default UpdateUser

