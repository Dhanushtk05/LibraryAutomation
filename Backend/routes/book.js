const express = require('express');
const {  getSingleBook, newBook, updateBook, deletebook, getAdminBooks, getBookCounts, getUserBooks } = require('../controllers/bookController');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles } = require('../middlewares/authenticate');
const { issuseBooks, getAlltransaction, returnBook, getsingleTransaction, getUsertransaction } = require('../controllers/transactionBook');

router.route('/books').get( getUserBooks);
router.route('/getusertrans/:id').get(getUsertransaction);

                            


//Admin routes
router.route('/admin/book/new').post(isAuthenticatedUser, authorizeRoles('admin'), newBook);
router.route('/admin/books').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminBooks);
router.route('/admin/book/:id').put(isAuthenticatedUser,authorizeRoles('admin'),updateBook)
router.route('/admin/book/:id').delete(isAuthenticatedUser,authorizeRoles('admin'),deletebook)
router.route('/admin/books/count').get(isAuthenticatedUser, authorizeRoles('admin'), getBookCounts);
router.route('/admin/book/:id').get(isAuthenticatedUser,authorizeRoles('admin'),  getSingleBook)
router.route('/admin/issue').post(isAuthenticatedUser,authorizeRoles('admin'),issuseBooks);
router.route('/admin/alltransactions').get(isAuthenticatedUser,authorizeRoles('admin'),getAlltransaction);
router.route('/admin/return/:id').put(isAuthenticatedUser,authorizeRoles('admin'),returnBook);
router.route('/admin/getsingletrans/:id').get(isAuthenticatedUser,authorizeRoles('admin'),getsingleTransaction);

module.exports = router;