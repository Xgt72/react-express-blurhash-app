const multer = require("multer");
const path = require("path");
const { encodeImageToBlurhash } = require("../helpers/blurhash.helpers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

const uploadPicture = (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send(err.message);
    }

    // encode picture with blurhash
    const pictureUrl = path.join(
      __dirname,
      "../../public/assets/images",
      req.file.filename
    );
    const { blurhashString, width, height } = await encodeImageToBlurhash(
      pictureUrl
    );

    // put data in req.body
    req.body = {
      filename: req.file.filename,
      description: JSON.parse(req.body.imageData).description,
      blurhash: blurhashString,
      width,
      height,
    };
    return next();
  });
};

module.exports = { uploadPicture };
