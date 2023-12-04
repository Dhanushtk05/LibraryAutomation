import React, { useState } from 'react'
import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { MDBDataTable} from 'mdbreact';
import Sidebar from "./Sidebar"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const TransactionDetails = () => {

    const[trans , setTrans] = useState([]);

   

   
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

    useEffect(() => {
        async function fetchdata(){

            const  data2  =  await axios.get(`/api/v1/admin/alltransactions`);
            setTrans(data2.data.transaction)

        }
        
        fetchdata();
    },[])

    const setTransac = () => {
        const data = {
            columns : [
                {
                    label: 'Register Number',
                    field: 'userreg',
                    sort: 'asc'
                },
                {
                    label: 'Book Name',
                    field: 'name'
                },
                {
                    label: 'Category',
                    field: 'category',
                    sort: 'asc'
                },
                {
                    label: 'Author',
                    field: 'author',
                    sort: 'asc'
                },{
                    label: 'Return status(yes/no)',
                    field:'return'
                },
                {
                    label: 'Return Book',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows : []
        }

        trans.forEach( trans => {
            data.rows.push({
                userreg: trans.userreg,
                name : trans.bookname,
                category:trans.category,
                author:trans.author,
                return:trans.returned,
                actions: (
                    <Fragment>
                        <Link to={`/admin/book/return/${trans._id}`} className="btn  py-0 px-1 ml-0"> <i className="fa fa-exchange-alt"></i></Link>
                    </Fragment>
                )
            })
        })

        return data;
    }


  return (
     <div className="row">
        <div className="col-12 col-md-1" id='sidebar'>
                <Sidebar/>
        </div>

        <div className='adminheader'>
              <button className='adbtn' onClick={logoutHandler}>LOGOUT</button>
              <h1>CIT CSE LIBRARY</h1>
        </div>

        <div className="col-12 col-md-11" id='list'>
            <h1 className="my-4">Transaction Details</h1>
            <Fragment>
             
                    <MDBDataTable
                        data={setTransac()}
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

export default TransactionDetails
