import axios from 'axios';
import Sidebar from './Sidebar';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'

const ReturnBook = () => {

    const {id:transId} = useParams();
    const [tran,setTran]=useState("");
    const [userreg,setUserreg] = useState("");
    const [name,setName] = useState("");
    const [author,setAuthor] = useState("");
    const [category,setCategory] = useState("");
    const [returned , setReturned]=useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

    useEffect(()=>{

        async function gettrans(id){
            const data1 = await axios.get(`/api/v1/admin/getsingletrans/${id}`);
            setTran(data1.data.transaction);
        }
        gettrans(transId);

    },[transId]);

    useEffect(()=>{

        setUserreg(tran.userreg);
        setName(tran.bookname);
        setCategory(tran.category);
        setAuthor(tran.author);
        setReturned(tran.returned);

    },[tran])

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userreg' , userreg);
        formData.append('bookname' , name);
        formData.append('category' , category);
        formData.append('author' , author);
        formData.append('returned' , returned);
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        await axios.put(`/api/v1/admin/return/${transId}`, formData, config);
        navigate('/admin/book/alltransaction')
    }
    

  return (
    <div>
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
                            <h1 className="mt-2 mb-4">Return Book</h1>

                            <div className="form-group">
                            <label htmlFor="name_field">Register Number</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                onChange={e => setUserreg(e.target.value)}
                                value={userreg}
                            />
                            </div>

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
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="price_field">Author Name</label>
                                <input
                                type="text"
                                id="category_field"
                                className="form-control"
                                onChange={e => setAuthor(e.target.value)}
                                value={author}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category_field">Return status</label>
                                <select  value={returned} onChange={e => setReturned(e.target.value)} className="form-control" id="category_field">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            
                            
                            <button
                            id="login_button"
                            type="submit"
                            className="btn btn-block py-3"
                            >
                            Return
                            </button>

                        </form>
                    
            </div>

            </div>

            <div className='adminfooter'><LayoutFooter/></div>
        </div>
      
    </div>
  )
}

export default ReturnBook
