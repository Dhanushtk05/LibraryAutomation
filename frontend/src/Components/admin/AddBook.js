import React, { useState  } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sidebar from "./Sidebar";
import { useDispatch } from 'react-redux';
import { logout} from '../../actions/userActions'
import LayoutFooter from '../Layouts/LayoutFooter'


const AddBook = () => {
    const [name , setName] = useState("")
    const [author , setAuthor] = useState("")
    const [publisher , setPublisher] = useState("")
    const [category , setCategory] = useState("")
    const [yearofPublish , setyearofPublish] = useState("")
    const [copies, setCopies] = useState("");
    const [edition, setEdition] = useState("");
    const navigate = useNavigate()

    const dispatch = useDispatch();
    const logoutHandler = () => {
      dispatch(logout);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name' , name);
        formData.append('category' , category);
        formData.append('noofcopies' , copies);
        formData.append('author',author);
        formData.append('edition',edition);
        formData.append('publisher',publisher);
        formData.append('yearofPublish',yearofPublish);
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        await axios.post(`/api/v1/admin/book/new`, formData, config);
        navigate('/admin/books')
        
    }
    
  return (
    <div className='row'>
        <div className="col-12 col-md-2" id='sidebar'>
                    <Sidebar/>
        </div>

        <div className='adminheader'>
              <button className='adbtn' onClick={logoutHandler}>LOGOUT</button>
              <h1>CIT CSE LIBRARY</h1>
        </div>


        <div className="row wrapper" id='update'>
            <div className="col-10 col-lg-5">
                <form  className="shadow-lg" onSubmit={submitHandler}>
                    <h1 className="mb-3">Add Book</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Book name</label>
                        <input
                            keyword='book'
                            id="book_field"
                            className="form-control"
                            placeholder="Enter Book name"
                            value={name}
                            onChange = {e=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_field">Author name</label>
                        <input
                            name='author'
                            id="author_field"
                            className="form-control"
                            placeholder="Enter Author name"
                            value={author}
                            onChange = { e=>setAuthor(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_field">Publisher name</label>
                        <input
                            name='Publisher'
                            id="publisher_field"
                            className="form-control"
                            placeholder="Enter Publisher name"
                            value={publisher}
                            onChange = {e=>setPublisher(e.target.value)}
                        />
                    </div>


                    <div className='form-group'>
                        <label htmlFor='exampleFormControlSelect1'>Category</label>
                        <select 
                            name='category'
                            className='form-control' 
                            id='exampleFormControlSelect1'
                            as = 'select'
                            value={category}
                            onChange = {e=>setCategory(e.target.value)}
                        >

                            <option defaultValue="Choose Category">Choose category</option>
                            <option value="NANO TECHONOLOGY">NANO TECHONOLOGY</option>
                            <option value="MACHINE LEARNING">MACHINE LEARNING</option>
                            <option value="ARTIFICIAL INTELLIGENCE">ARTIFICIAL INTELLIGENCE</option>
                            <option value="OPERATING SYSTEM">OPERATING SYSTEM</option>
                            <option value="DATA SCIENCE">DATA SCIENCE</option>
                            <option value="MICROPROCESSOR">MICROPROCESSOR</option>
                            <option value="NEURAL NETWORKS">NEURAL NETWORKS</option>
                            <option value="COMPUTER GRAPHICS">COMPUTER GRAPHICS</option>
                            <option value="COMPILER">COMPILER</option>
                            <option value="COMPUTER NETWORKS">COMPUTER NETWORKS</option>
                            <option value="COMPUTER ARCHITECTURE">COMPUTER ARCHITECTURE</option>
                            <option value="DIGITAL DESIGN">DIGITAL DESIGN</option>
                            <option value="DIGITAL SIGNAL PROCESSING">DIGITAL SIGNAL PROCESSING</option>
                            <option value="DATA MINING AND DATA WAREHOUSE">DATA MINING AND DATA WAREHOUSE</option> 
                            <option value="DATA MINING">DATA MINIG</option>
                            <option value="DATABASE">DATABASE</option>
                            <option value="PROGRAMMING AND GENERAL">PROGRAMMING AND GENERAL</option>
                            <option value="BIO INFORMATICS">BIO INFORMATICS</option>
                            <option value="BIG DATA">BIG DATA</option>
                            <option value="COMPUTING">COMPUTING</option>
                            <option value="SOFTWARE ENGINEERING">SOFTWARE ENGINEERING</option> 
                            <option value="UNIX">UNIX</option> 
                            <option value="INTERNET TECHNOLOGY">INTERNET TECHNOLOGY</option>
                            <option value="C PROGRAMMING">C PROGRAMMING</option>
                            <option value="C++ PROGRAMMING">C++ PROGRAMMING</option>
                            <option value="JAVA PROGRAMMING">JAVA PROGRAMMING</option> 
                            <option value="PASCAL">PASCAL</option>
                            <option value="DBMS">DBMS</option>
                            <option value="OOPS">OOPS</option>
                            <option value="GUI">GUI</option>
                            <option value="PYTHON PROGRAMMING">PYTHON PROGRAMMING</option>
                            <option value="DISCRETE MATHEMATICS">DISCRETE MATHEMATICS</option>
                            <option value="AUTOMATA THEORY">AUTOMATA THEORY</option>
                            <option value="PROBABILITY">PROBABILITY</option>
                            <option value="ENGINEERING MATHEMATICS">ENGINEERING MATHEMATICS</option>
                            <option value="DATA STRUCTURE AND ALGORITHM">DATA STRUCTURE AND ALGORITHM</option>                                                
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Year of Publish</label>
                        <input
                            name='year'
                            id="year_field"
                            className="form-control"
                            placeholder="Enter the year"
                            value={yearofPublish}
                            onChange = {e=>setyearofPublish(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Book Edition</label>
                        <input
                            keyword='book'
                            id="book_field"
                            className="form-control"
                            placeholder="Enter Book Edition"
                            value={edition}
                            onChange = {e=>setEdition(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                                <label htmlFor="price_field">Number of Copies</label>
                                <input
                                type="number"
                                id="price_field"
                                className="form-control"
                                onChange={e => setCopies(e.target.value)}
                                value={copies}
                                />
                    </div>

                    <button
                        id="search_button"
                        type="submit"
                        className="btn btn-block py-3"
                        >
                        ADD BOOk
                    </button>

                </form>
            </div>
         
        </div>
        <div className='adminfooter'><LayoutFooter/></div>
    </div>
  )
}

export default AddBook
