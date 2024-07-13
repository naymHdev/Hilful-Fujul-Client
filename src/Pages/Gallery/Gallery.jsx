import React, { useEffect, useState } from "react";
import useGallery from "../../Hooks/useGallery";
import { Gallery } from "react-grid-gallery";

const ImageGallery = () => {
  const [isGallery] = useGallery();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = isGallery.map((itm) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = itm.image_link;
          img.onload = () => {
            resolve({
              src: itm.image_link,
              thumbnail: itm.image_link,
              width: img.width,
              height: img.height,
            });
          };
        });
      });

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
    };

    loadImages();
  }, [isGallery]);

  return <Gallery images={images} />;
};

export default ImageGallery;
