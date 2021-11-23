const router = require("express").Router();
const mentorRouter = require("./mentor");
const userRouter = require("./user");

router.use("/mentor", mentorRouter);
router.use("/user", userRouter);

module.exports = router;
