// new file called DogPicture.jsx
import React, { useEffect, useState } from "react";

const DogPics = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img
        src={imageUrl}
        alt='a dog'
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default DogPics;
