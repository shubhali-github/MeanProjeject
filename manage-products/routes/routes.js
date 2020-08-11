// routes.js

const express = require("express");

// express.Router() : Routing refers to how an application's endpoints (URIs) respond to client requests.
// You define routing using methods of the Express app object that correspond to HTTP methods.

const router = express.Router();

// retrieving products list
router.get("/products", (req, res, next) => {
  res.send("<h1>Retrieving the products list</h1>");
});

// add product
router.post("/product", (req, res, next) => {
  // logic to add product
});

// delete product
router.delete("/product/:id", (req, res, next) => {
  //logic to delete product
});

module.exports = router;
