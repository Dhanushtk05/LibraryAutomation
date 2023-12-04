import React, { useEffect, useState } from 'react'
import Sidebar from "./Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const BookIssue = () => {

    const [books,setBooks] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [user,setUser] = useState("");
    const { id:bookId } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        async function getbook(id){
            const data2 = await axios.get(`/api/v1/admin/book/${id}`)
            setBooks(data2.data.book)
        }
        getbook(bookId)
    },[bookId])

    function myFunction() {
        let x = document.getElementById("category_field");
        x.value = x.value.toUpperCase();
    }

    useEffect(() => {
            setName(books.name);
            setCategory(books.category);
            setAuthor(books.author);
        
    },[books])

    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }
    
   const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userreg',user)
        formData.append('bookname' , name);
        formData.append('author' , author);
        formData.append('category' , category);
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        await axios.post(`/api/v1/admin/issue`, formData, config);
        navigate('/admin/book/issue')
        
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
                    
                        <form onSubmit={submitHandler}  className="shadow-lg" encType='multipart/form-data'>
                            <h1 className="mt-2 mb-4">Issue Book</h1>

                            <div className="form-group">
                            <label htmlFor="name_field"> Book Name</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Category</label>
                                <input
                                type="text"
                                id="category_field"
                                className="form-control"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                                onBlur={myFunction}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price_field">Author</label>
                                <input
                                type="text"
                                id="price_field"
                                className="form-control"
                                onChange={e => setAuthor(e.target.value)}
                                value={author}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price_field"> Register Number</label>
                                <input
                                type="text"
                                id="price_field"
                                className="form-control"
                                onChange={e => setUser(e.target.value)}
                                value={user}
                                placeholder='Enter the Student Register Number'
                                />
                            </div>
                            <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            >
                            Issue Book
                            </button>

                        </form>
                    
            </div>

            </div>

            <div className='adminfooter'><LayoutFooter/></div>
        </div>
  )
}

export default BookIssue
