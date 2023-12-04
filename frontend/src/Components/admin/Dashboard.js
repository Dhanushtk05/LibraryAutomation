import React, { useEffect, useState } from 'react'
import LayoutFooter from '../Layouts/LayoutFooter'
import './Dashboard.css'
import { logout} from '../../actions/userActions'
import { useDispatch } from 'react-redux'
import Sidebar from './Sidebar' 
import { Link } from 'react-router-dom'
import axios from 'axios'



const Dashboard = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

    const[bookcount,setBookCount]=useState(0);
    const[usercount,setUserCount]=useState(0);

    useEffect(()=>{async function fetchdata(){
        const  data  =  await axios.get(`/api/v1/admin/books/count`);
        setBookCount(data.data.count);

        const  data1  =  await axios.get(`/api/v1/admin/users/count`);
        setUserCount(data1.data.count);
    }
    fetchdata();
       
    },[]);

   

   
    

  return (
    <div className='adminhome'>
        
        <div className='sidehomenavbar'>
               <Sidebar/>
        </div>

        <div className='adminheader'>
            <button className='adbtn' onClick={logoutHandler}>LOGOUT</button>
            <h1>CIT CSE LIBRARY</h1>
        </div>
        
        <div className="col-12 col-md-10 contents">
                <h1 className="my-4 title">DASHBOARD</h1>
                <div className="row pr-4 number">
                    <div className="col-xl-12 col-sm-12 mb-3">
                        <div className="card text-white bg-primary o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Total Number of Books in Library<br /><b>{bookcount}</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pr-4">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Total Users<br /> <b>{usercount}</b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Book Details<br /> <b></b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/books">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Add New Book<br /> <b></b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/book/create">
                                <span className="float-left">Add</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>


                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-info o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">Transactions<br /> <b></b></div>
                            </div>
                            <Link className="card-footer text-white clearfix small z-1" to="/admin/book/alltransaction">
                                <span className="float-left">View Details</span>
                                <span className="float-right">
                                    <i className="fa fa-angle-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        <div className='adminfooter'><LayoutFooter/></div>
    </div>
  )
}

export default Dashboard
