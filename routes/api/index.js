const router = require("express").Router();
const searchRoutes = require("./books");

// Book routes
router.use("/books", searchRoutes);

module.exports = router;
