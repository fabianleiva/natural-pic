import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ImagesContext = createContext();

const apiUrl = "https://api.pexels.com/v1/search";
const apiKey = "1KGyF6yZkmGOm5tbnwvs5VkUBBmQxiLTTdk33QRUL9klbWa2bdwc4Xkc";
const query = "nature";
const numberOfImages = 20;

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const getPhotosData = async () => {
    try {
      const response = await axios(`${apiUrl}`, {
        headers: {
          Authorization: apiKey,
        },
        params: {
          query: query,
          per_page: numberOfImages,
        },
      });
      if (response.status !== 200) {
        throw new Error("Problem getting data from API");
      }
      const photosData = response.data.photos;
      setImages(photosData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPhotosData();
  }, []);

  const changeLikedStatus = (id) => {
    const newImages = images.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          liked: !e.liked,
        };
      }
      return e;
    });
    setImages(newImages);
  };

  return (
    <ImagesContext.Provider value={{ images, setImages, changeLikedStatus }}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesProvider;
