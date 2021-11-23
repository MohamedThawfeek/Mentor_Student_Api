const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact_no: {
    type: Number,
    require: true,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Mentor = mongoose.model("mentor", mentorSchema);

module.exports = Mentor;
