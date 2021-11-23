const router = require("express").Router();
const Mentor = require("../model/mentor");
const User = require("../model/user");

router.get("/", (req, res) => {
  res.send("User router is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await User.create(req.body);
    const mentorData = await Mentor.findByIdAndUpdate(
      { _id: data.mentor },
      {
        $push: { students: data._id },
      },
      { new: true }
    );

    res.json({ user: data, mentor: mentorData });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await User.find({})
      .populate("mentor", "-_id -students")
      .sort({ name: 1 })
      .select("name age contact_no  department -_id");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
