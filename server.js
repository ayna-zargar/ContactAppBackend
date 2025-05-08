const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.use("/api/contacts", require("./routes/ContactRoutes"));
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
