const express = require('express')
const router = express.Router()


router.use("/login", require("./routes/login"));
router.use("/transfers", require("./routes/transfers_customer"));
router.use("/accounts", require("./routes/accounts"));
router.use("/transactions/banker", require("./routes/transaction_banker"));
router.use("/transactions/cust", require("./routes/transaction_customer"));
router.use("/balance", require("./routes/balance"));

module.exports = router;