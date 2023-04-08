const router = require("express").Router();
const Student = require("../schema/studentSchema");
const WorkTime = require("../schema/workTimeSchema");
const moment = require("moment");
// router.get("/", (req, res) => {
//   res.send("Hello Router");
// });

router.post("/student", async (req, res) => {
  try {
    const { firstName, lastName, displayName, muncipality } = req.body;
    // console.log(firstName);
    // console.log(lastName);
    // console.log(displayName);
    // console.log(muncipality);
    const upload = new Student({
      firstName,
      lastName,
      displayName,
      muncipality,
    });
    const saveData = await upload.save();
    res.status(201).json({ data: saveData });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.post("/studenttime", async (req, res) => {
  try {
    const { id } = req.body;
    // console.log(id);
    const uploadData = new WorkTime({
      student: id,
    });
    const saveData = await uploadData.save();
    res.status(201).json({ message: "successful" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/time", async (req, res) => {
  try {
    const data = await WorkTime.find();
    // console.log(data);
    data.map(async (data) => {
      const studentData = await Student.findOne({ _id: data.student });
      const timestamp = data._id.getTimestamp();
      const formatted = moment(timestamp).format("LTS");
      console.log(
        `${studentData._doc.firstName} ${studentData._doc.lastName}: ${formatted}`
      );
    });
    res.status(201).json({ message: "successful" });
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
