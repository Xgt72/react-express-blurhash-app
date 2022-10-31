const blurhash = require("blurhash");
const { createCanvas, loadImage } = require("canvas");

const getImageData = (image) => {
  const canvas = createCanvas(image.width, image.height);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};

const encodeImageToBlurhash = (imageUrl) => {
  return loadImage(imageUrl).then((image) => {
    const imageData = getImageData(image);

    const blurhashString = blurhash.encode(
      imageData.data,
      image.width,
      image.height,
      4,
      4
    );
    return { blurhashString, width: image.width, height: image.height };
  });
};

module.exports = { encodeImageToBlurhash };
