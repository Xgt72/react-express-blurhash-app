import "./PictureWithBlurhash.scss";

import { useState } from "react";
import { Blurhash } from "react-blurhash-async";

const PictureWithBlurhash = ({
  filename,
  blurhash,
  description,
  width,
  height,
  loading,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getAspectRatio = () => `${width} / ${height}`;

  const getStyle = () => {
    return {
      display: "block",
      width: "100%",
      height: "100%",
      aspectRatio: getAspectRatio(),
    };
  };

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className="container-picture"
      style={{ aspectRatio: getAspectRatio() }}
    >
      <Blurhash
        style={getStyle()}
        hash={blurhash}
        loading={loading}
        resolutionX={32}
        resolutionY={32}
        // punch={1}
        className={
          isLoaded
            ? "image blurhash-picture isLoaded"
            : "image  blurhash-picture"
        }
      />
      <img
        src={filename}
        loading={loading}
        alt={description}
        className={isLoaded ? "image isLoaded" : "image"}
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default PictureWithBlurhash;
