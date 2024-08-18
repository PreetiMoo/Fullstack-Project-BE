const express = require('express')
const router = express.Router()


router.use("/login", require("./login"));
router.use("/transfers", require("./transfers_customer"));
router.use("/accounts", require("./accounts"));
router.use("/transactions/banker", require("./transaction_banker"));
router.use("/transactions/cust", require("./transaction_customer"));
router.use("/balance", require("./balance"));

module.exports = router;