// This code is responsible for supporting the API server

const express = require("express");
const app = express();
const routes = require("./routes");
require("../config/associations");

// Enable JSON parsing for request bodies
app.use(express.json());

// Mount routes
app.use("/api", routes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
