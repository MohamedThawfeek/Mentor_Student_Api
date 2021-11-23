const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  contact_no: Number,
  department: String,
  mentor: {
    type: mongoose.Types.ObjectId,
    ref: "mentor",
  },
});

const Student = mongoose.model("users", studentSchema);

module.exports = Student;
