import React, { useState } from 'react'
import { Fragment, useEffect } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { MDBDataTable} from 'mdbreact';
import Sidebar from "./Sidebar"
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const BookList = () => {

    const[book , setBook] = useState([]);
    const navigate = useNavigate();
    async function deletebook(id){
        await axios.delete(`/api/v1/admin/book/${id}`);
    }

    const deleteHandler = (e, id) => {
        e.target.disabled = true;
        deletebook(id);
        navigate('/admin/dashboard')
        
    }

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
                    label: 'Actions',
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
                        <Link to={`/admin/book/${book._id}`} className="btn  py-0 px-1 ml-0"> <i className="fa fa-edit"></i></Link>
                        <Button onClick={e => deleteHandler(e, book._id)} className="btn btn-danger py-0 px-1 ml-0">
                            <i className="fa fa-trash-alt" ></i>
                        </Button>
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
            <h1 className="my-4">Books List</h1>
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

export default BookList
