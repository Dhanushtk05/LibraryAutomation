import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LayoutHead from '../Layouts/LayoutHead';
import LayoutFooter from '../Layouts/LayoutFooter';
import { MDBDataTable } from 'mdbreact';

const UserTransaction = () => {

    const {user} = useSelector(state => state.authState);
    const regno = user.regno;

    const [trans,setTrans] =useState([]);

    useEffect(()=>{

        async function gettransaction(no){

            const data2 = await axios.get(`/api/v1/getusertrans/${no}`);
            console.log(data2)
            setTrans(data2.data.transaction);
        }
   
        gettransaction(regno);
    },[regno]);

    const setTransac = () => {
        const data = {
            columns : [
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
                }
            ],
            rows : []
        }

        trans.forEach( trans => {
            data.rows.push({
                name : trans.bookname,
                category:trans.category,
                author:trans.author,
                return:trans.returned,
            })
        })

        return data;
    }


  return (
    <div className='row'>

        <div><LayoutHead/></div>

       <div className="col-12 col-md-11" >
            <h1 className="my-4">Transaction Details</h1>
            <Fragment>
             
                    <MDBDataTable
                        responsiveSm
                        data={setTransac()}
                        bordered
                        striped
                        hover
                        className="px-3"
                    />
                
            </Fragment>
        </div>
       <div id='transfooter'><LayoutFooter/></div>
    </div>
  )
}

export default UserTransaction
