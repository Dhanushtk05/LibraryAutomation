import React from 'react'
import { Fragment, useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { MDBDataTable} from 'mdbreact';
import Sidebar from "./Sidebar"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'


const UserList = () => {
    const [user,setUser] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }

    async function deleteUser(id){

        await axios.delete(`/api/v1/admin/user/deleteuser/${id}`);
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        console.log(id)
        deleteUser(id)
        navigate('/admin/dashboard');
    }

    useEffect(() => {

        async function fetchdata(){

            const  data2  =  await axios.get(`/api/v1/admin/users`);
            setUser(data2.data.users)

        }
        
        fetchdata();
    },[])

    

    const setUsers = () => {
        const data = {
            columns : [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Register Number',
                    field: 'regno',
                    sort: 'asc'
                },
                {
                    label: 'Email',
                    field: 'email',
                    sort: 'asc'
                },
                {
                    label: 'Role',
                    field: 'role',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows : []
        }
        

        user.forEach( user => {
            data.rows.push({
                id: user._id,
                name: user.name,
                regno:user.regno,
                email : user.email,
                role: user.role ,
                actions: (
                    <Fragment>
                        <Link to={`/admin/user/${user._id}`} className="btn "> <i className="fa fa-edit"></i></Link>
                        <Button onClick={e => deleteHandler(e, user._id)} className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </Button>
                    </Fragment>
                )
            })
        })

        return data;
    }

    


    return (
        <div className="row">
        <div className="col-12 col-md-2" id='sidebar'>
                <Sidebar/>
        </div>
        <div className='adminheader'>
            <button className='adbtn' onClick={logoutHandler}>LOGOUT</button>
            <h1>CIT CSE LIBRARY</h1>
        </div>
        <div className="col-12 col-md-10" id='list'>
            <h1 className="my-4">User List</h1>
            <Fragment>
                
                    <MDBDataTable
                        data={setUsers()}
                        bordered
                        striped
                        hover
                        className="px-3"
                    />
                
            </Fragment>
        </div>
        <div className='adminfooter'><LayoutFooter/></div>
    </div>
    )
}

export default UserList
