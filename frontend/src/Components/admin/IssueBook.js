import React, { useState } from 'react'
import { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import { MDBDataTable} from 'mdbreact';
import Sidebar from "./Sidebar"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const IssueBook = () => {

    const[book , setBook] = useState([]);
    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

    useEffect(() => {
        async function fetchdata(){

            const  data2  =  await axios.get(`/api/v1/admin/books`);
            
            setBook(data2.data.books)

        }
        
        fetchdata();
    },[])

    const setBooks = () => {
        const data = {
            columns : [
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
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
                },
                {
                    label: 'Copies',
                    field: 'noofcopies',
                    sort: 'asc'
                },
                {
                    label: 'Year',
                    field: 'yearofPublish',
                    sort: 'asc'
                },
                {
                    label: 'Issue Book',
                    field: 'actions',
                    sort: 'asc'
                }
            ],
            rows : []
        }

        book.forEach( book => {
            data.rows.push({
                name: book.name,
                category:book.category,
                author:book.author,
                noofcopies:book.noofcopies,
                yearofPublish:book.yearofPublish,
                actions: (
                    <Fragment>
                        <Link to={`/admin/book/issue/${book._id}`} className="btn  py-0 px-1 ml-0"> <i className="fa fa-book"></i></Link>
                        
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
            <h1 className="my-4">Issue Book</h1>
            <Fragment>
             
                    <MDBDataTable
                        data={setBooks()}
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

export default IssueBook
