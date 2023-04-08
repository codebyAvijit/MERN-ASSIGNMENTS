const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, 'Please fill in your first name']
  },
  lastName: {
    type: String,
    // trim: true,
    default: "",
    // validate: [validateLocalStrategyProperty, 'Please fill in your last name']
  },
  displayName: {
    type: String,
    // trim: true,
  },
  muncipality: {
    type: String,
  },
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
