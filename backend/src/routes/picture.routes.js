const router = require("express").Router();

const pictureControllers = require("../controllers/pictureControllers");
const uploadPictureControllers = require("../controllers/uploadControllers");

router.get("/", pictureControllers.browse);
router.get("/:id", pictureControllers.read);
router.put("/:id", pictureControllers.edit);
router.post(
  "/",
  uploadPictureControllers.uploadPicture,
  pictureControllers.add
);
router.delete("/:id", pictureControllers.destroy);

module.exports = router;
