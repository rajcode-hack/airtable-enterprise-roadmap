const express = require("express");
const cors = require("cors");

const workspaces = require("./routes/workspaces");
const programs = require("./routes/programs");
const members = require("./routes/members");

const app = express();
app.use(cors());

app.use("/api/workspaces", workspaces);
app.use("/api/programs", programs);
app.use("/api/members", members);

app.listen(4000, () =>
  console.log("Backend running on http://localhost:4000")
);
