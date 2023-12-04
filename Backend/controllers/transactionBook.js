const trans = require('../models/transactionModel');
const catchAsyncError = require('../middlewares/catchAsyncError');

exports.issuseBooks = catchAsyncError(async (req,res,next)=>{
    const {userreg,bookname,author,category} = req.body
    const issue = await trans.create({
        userreg,
        bookname,
        author,
        category

    });
    res.status(201).json({
        success: true,
        issue
    })

})

exports.getAlltransaction = catchAsyncError(async (req,res,next)=>{
    const transaction = await trans.find();
    res.status(200).send({
        success: true,
        transaction
    })
})

exports.getsingleTransaction = catchAsyncError(async(req,res,next)=>{
    const transaction = await trans.findById(req.params.id);
    res.status(200).send({
        success:true,
        transaction
    })
})

exports.returnBook = catchAsyncError(async (req,res,next)=>{
    let transaction = await trans.findById(req.params.id);

    transaction = await trans.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        success: true,
        transaction
    })

})

exports.getUsertransaction = catchAsyncError(async (req,res,next)=>{
    const transaction = await trans.find({userreg:req.params.id});

    res.status(200).json({
        success:true,
        transaction
    })


})