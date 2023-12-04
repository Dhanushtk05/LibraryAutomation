import React, { useState ,useEffect ,Fragment} from 'react'
import LayoutHead from '../Layouts/LayoutHead'
import LayoutFooter from '../Layouts/LayoutFooter'
import axios from 'axios'
import { MDBDataTable} from 'mdbreact';
//import Navbar from '../Navbar';




const Searchbook = () => {

    const[book , setBook] = useState([]);

    

    useEffect(() => {
        async function fetchdata(){

            const  data2  =  await axios.get(`/api/v1/books`);
            
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
               
            })
        })

        return data;
    }
   


  return (
    <div className='row'>
        
      <div><LayoutHead/></div>
      <div className="col-12 col-md-11" >
            <h1 className="mt-5">Books </h1>
            <Fragment>
             
                    <MDBDataTable
                        responsiveSm
                        data={setBooks()}
                        bordered
                        striped
                        hover
                        className="px-3"
                    />
                
            </Fragment>
        </div>
         
        
    <div><LayoutFooter/></div>
    </div>
  )
}

export default Searchbook
