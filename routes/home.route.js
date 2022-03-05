const router = require("express").Router();
const homeController = require("../controller/home.controller");

router.get("/", homeController.getHome);
router.post("/step2", homeController.postVerify);

module.exports = router;
