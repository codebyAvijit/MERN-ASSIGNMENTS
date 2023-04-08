const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// ipw8RuIyKuVZ7aTL

const WorkTimeSchema = new mongoose.Schema(
  {
    student: {
      type: ObjectId,
      ref: "Student",
    },
  },
  { timestamps: true }
);

const WorkTime = mongoose.model("WorkTime", WorkTimeSchema);

module.exports = WorkTime;
