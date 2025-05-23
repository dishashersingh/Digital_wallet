const express = require('express');
const router = express.Router();

// Middleware to protect routes
const protect = require('../middleware/auth.middleware');

// Controller for wallet operations
const {
  depositMoney,
  withdrawMoney,
  transferMoney,
  getTransactionHistory
} = require('../controllers/wallet.controller');


//Deposit money
router.post('/deposit', protect, depositMoney);

//Withdraw money 
router.post('/withdraw', protect, withdrawMoney);

//Transfer money from one user to another
router.post('/transfer', protect, transferMoney);

//Get all transaction history
router.get('/transactions', protect, getTransactionHistory);

module.exports = router;
