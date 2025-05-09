const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(express.json());

app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
