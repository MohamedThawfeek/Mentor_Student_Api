const router = require("express").Router();
const Mentor = require("../model/mentor");

router.get("/", (req, res) => {
  res.send("Mentor router is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Mentor.create(req.body);
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await Mentor.find({})
      .populate("students", "name department age -_id")
      .sort({ name: 1 })
      .select("name age contact_no email experience");
    res.json(data);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
