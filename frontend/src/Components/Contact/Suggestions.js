import React from 'react'
import LayoutHead from '../Layouts/LayoutHead'
import LayoutFooter from '../Layouts/LayoutFooter'
import './Suggestions.css'
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {sendSuggestion,clearAuthError} from '../../actions/userActions'
import {toast} from 'react-toastify'

const Suggestions = () => {
    const [email, setEmail] = useState("");
    let [msg,setMsg] = useState("");
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.authState);
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('msg',msg);
        dispatch(sendSuggestion(formData))
    }

    useEffect(()=>{
        if(message) {
            toast(message, {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER
            })
            setEmail("");
            setMsg("");
            return;
        }

        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    }, [message, error, dispatch])

  
  return (
    
    <div className='row'>
        
      <div>
        <LayoutHead/>
      </div>
      <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">Contact</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            placeholder="Enter your Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Enter your Message</label>
                        <textarea
                            name='msg'
                            id="exampleFormControlTextarea1"
                            className="form-control"
                            value={msg}
                            onChange={e=>setMsg(e.target.value)}
                            placeholder="Enter your message...."
                            rows="5"
                        />
                    </div>

                    <button
                        id="suggest_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Send Message
                    </button>

                </form>
            </div>
        </div>
        <div><LayoutFooter/></div>
    </div>
  )
}

export default Suggestions
