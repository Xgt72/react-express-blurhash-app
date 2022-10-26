const express = require("express");

const router = express.Router();

const pictureControllers = require("./controllers/pictureControllers");

router.get("/pictures", pictureControllers.browse);
router.get("/pictures/:id", pictureControllers.read);
router.put("/pictures/:id", pictureControllers.edit);
router.post("/pictures", pictureControllers.add);
router.delete("/pictures/:id", pictureControllers.destroy);

module.exports = router;
