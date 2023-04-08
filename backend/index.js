const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

require("./src/db/conn.js");
const studentRouter = require("./src/router/studentRouter.js");
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.use("/api", studentRouter);

app.listen(PORT, () => {
  console.log(`The app is up and running on ${PORT}`);
});
