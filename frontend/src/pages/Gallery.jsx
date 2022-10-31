import "./Gallery.scss";

import { useState, useEffect } from "react";
import axios from "@services/axios";
import PictureWithBlurhash from "@components/PictureWithBlurhsah";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const getPictures = async () => {
      const { data } = await axios.get("api/pictures");
      setPictures(data);
    };
    getPictures();
  }, []);

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      {pictures.map(
        ({ filename, description, blurhash, width, height, id }) => {
          const src = `${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/${filename}`;
          return (
            <PictureWithBlurhash
              key={`picture-${id}`}
              loading="lazy"
              filename={src}
              blurhash={blurhash}
              description={description}
              width={width}
              height={height}
            />
          );
        }
      )}
    </section>
  );
};

export default Gallery;
