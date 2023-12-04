import axios from 'axios'
import {booksFail,booksRequest,booksSuccess ,adminBooksSuccess,adminBooksFail,adminBooksRequest, countRequest, countSuccess, countFail} from '../slices/booksSlice'


export const getBooks = (category, author, publisher,yearofPublish,keyword,currentPage) => async (dispatch) => {

    try {  
        dispatch(booksRequest()) 
        let link = `/api/v1/books?page=${currentPage}`;
        
        if(keyword) {
            link += `&keyword=${keyword}`
        }

        if(author) {
            link += `&author=${author}`
        }

        if(category) {
            link += `&category=${category}`
        }

        if(publisher) {
            link += `&publisher=${publisher}`
        }

        if(yearofPublish) {
            link += `&yearofPublish=${yearofPublish}`
        }
        
        const { data }  =  await axios.get(link);
        dispatch(booksSuccess(data))
    } catch (error) {
        //handle error
        dispatch(booksFail(error.response.data.message))
    }
    
}

export const getBookCounts  =  async (dispatch) => {

    try {  
        dispatch(countRequest()) 
        const { data }  =  await axios.get(`/api/v1/admin/books/count`);
        dispatch(countSuccess(data))
    } catch (error) {
        //handle error
        dispatch(countFail(error.response.data.message))
    }
    
}

export const getAdminBooks  =  async (dispatch) => {

    try {  
        dispatch(adminBooksRequest()) 
        const { data }  =  await axios.get(`/api/v1/admin/books`);
        dispatch(adminBooksSuccess(data))
    } catch (error) {
        //handle error
        dispatch(adminBooksFail(error.response.data.message))
    }
    
}