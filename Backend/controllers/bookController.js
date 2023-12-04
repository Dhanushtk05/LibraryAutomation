const Book = require('../models/bookModel');
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncError = require('../middlewares/catchAsyncError')
const APIFeatures = require('../utils/apiFeatures');


//Get Books - /api/v1/books
exports.getBooks = catchAsyncError(async (req, res, next)=>{
    const resPerPage = 10;
    
    let buildQuery = () => {
        return new APIFeatures(Book.find(), req.query).search().filter()
    }
    
    const filteredBooksCount = await buildQuery().query.countDocuments({})
    const totalBooksCount = await Book.countDocuments({});
    let booksCount = totalBooksCount;

    if(filteredBooksCount !== totalBooksCount) {
        booksCount = filteredBooksCount;
    }
    
    const books = await buildQuery().paginate(resPerPage).query;

    res.status(200).json({
        success : true,
        count: booksCount,
        resPerPage,
        books
    })
})

//Create book - /api/v1/book/new
exports.newBook = catchAsyncError(async (req, res, next)=>{
    
    req.body.user = req.user.id;
    const book = await Book.create(req.body);
    res.status(201).json({
        success: true,
        book
    })
});

//Get Single Book - api/v1/book/:id
exports.getSingleBook = catchAsyncError(async(req, res, next) => {
    const book = await Book.findById(req.params.id);

    if(!book) {
        return next(new ErrorHandler('Book not found', 400));
    }

    res.status(201).json({
        success: true,
        book
    })
});

//Update Book - api/v1/book/:id
exports.updateBook = catchAsyncError(async (req, res, next) => {
    let book = await Book.findById(req.params.id);

    
    if(!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        book
    })

})

//Delete Book - api/v1/Book/:id
exports.deletebook = catchAsyncError(async (req, res, next) =>{
    const book = await Book.findById(req.params.id);

    if(!book) {
        return res.status(404).json({
            success: false,
            message: "book not found"
        });
    }

    await book.remove();

    res.status(200).json({
        success: true,
        message: "Book Deleted!"
    })

})

exports.getUserBooks = catchAsyncError(async (req, res, next) =>{
    const books = await Book.find();
   
    res.status(200).send({
        success: true,
        books
    })
});


exports.getAdminBooks = catchAsyncError(async (req, res, next) =>{
    const books = await Book.find();
   
    res.status(200).send({
        success: true,
        books
    })
});

exports.getBookCounts = catchAsyncError(async (req,res,next)=>{
    
    const totalBooksCount = await Book.countDocuments({});
    let booksCount = totalBooksCount;

    res.status(200).send({
        success:true,
        count: booksCount,

    })

})