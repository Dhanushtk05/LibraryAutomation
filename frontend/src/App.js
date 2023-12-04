import {useEffect,React} from 'react'
import './App.css'

import Loadpage from './Components/Loadpage'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Login from './Components/User/Login'
import Register from './Components/User/Register'
import ForgotPassword from './Components/User/ForgotPassword'
import Home from './Components/Home'
import { loadUser } from './actions/userActions';
import Profile from './Components/User/Profile'
import store from './store';
import ProtectedRoute from './Components/route/ProtectedRoute'
import UpdateProfile from './Components/User/UpdateProfile'
import UpdatePassword from './Components/User/UpdatePassword'
import ResetPassword from './Components/User/ResetPassword'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Suggestions from './Components/Contact/Suggestions'
import Rules from './Components/Contact/Rules'
import Searchbook from './Components/Book/Searchbook'
import Dashboard from './Components/admin/Dashboard'
import UserList from './Components/admin/UserList'
import BookList from './Components/admin/BookList'
import UpdateUser from './Components/admin/UpdateUser'
import UpdateBook from './Components/admin/UpdateBook'
import AddBook from './Components/admin/AddBook'
import IssueBook from './Components/admin/IssueBook'
import BookIssue from './Components/admin/BookIssue'
import TransactionDetails from './Components/admin/TransactionDetails'
import ReturnBook from './Components/admin/ReturnBook'
import UserTransaction from './Components/User/UserTransaction'
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser)
  
  })
  
  return (
    <Router>
    <div className='app'>   
         <Routes>
            <Route path='/' element={<Loadpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/password/forgot' element={<ForgotPassword/>}/>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute> } />
            <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute> } />
            <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute> } />
            <Route path='/password/reset/:token' element={<ResetPassword/> } />
            <Route path='/contactpage' element={<ProtectedRoute><Suggestions/> </ProtectedRoute>} />
            <Route path='/libraryrules' element={<ProtectedRoute><Rules/></ProtectedRoute>}/>
            <Route path='/search' element={<ProtectedRoute><Searchbook/></ProtectedRoute>}/>
            <Route path='/transactions' element={<ProtectedRoute><UserTransaction/></ProtectedRoute>}/>




            {/* admin routes */}
            <Route path='/admin/dashboard' element={ <ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute> }/>
            <Route path='/admin/users' element={ <ProtectedRoute isAdmin={true}><UserList/></ProtectedRoute> }/>
            <Route path='/admin/books' element={ <ProtectedRoute isAdmin={true}><BookList/></ProtectedRoute> }/>
            <Route path='/admin/user/:id' element={ <ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute> } />
            <Route path='/admin/book/:id' element={ <ProtectedRoute isAdmin={true}><UpdateBook/></ProtectedRoute> } />
            <Route path='/admin/book/create' element={ <ProtectedRoute isAdmin={true}><AddBook/></ProtectedRoute> } />
            <Route path='/admin/book/issue' element={ <ProtectedRoute isAdmin={true}><IssueBook/></ProtectedRoute> } />
            <Route path='/admin/book/issue/:id' element={ <ProtectedRoute isAdmin={true}><BookIssue/></ProtectedRoute> } />
            <Route path='/admin/book/alltransaction' element={ <ProtectedRoute isAdmin={true}><TransactionDetails/></ProtectedRoute> } />
            <Route path='/admin/book/return/:id' element={ <ProtectedRoute isAdmin={true}><ReturnBook/></ProtectedRoute> } />
          </Routes>
          <ToastContainer theme='dark' />   
    </div>
    </Router>
  )
}

export default App

