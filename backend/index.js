const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const connect = require("./config/db");
const cors = require("cors");

app.use(cors());
connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", require("./routes/useRoutes"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
