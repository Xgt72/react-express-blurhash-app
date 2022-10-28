const router = require("express").Router();

const pictureRoutes = require("./picture.routes");

router.use("/pictures", pictureRoutes);

module.exports = router;
