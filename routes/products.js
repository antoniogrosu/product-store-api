const express = require("express");
const app = express();
const router = express.Router();

//functions
const {
  getAllProductsStatic,
  getAllProducts,
} = require("../controllers/products");

//all router
router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
