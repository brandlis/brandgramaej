import React from "react";

const ItemStoryHorizontal = ({ image, name }) => {
  return (
    <>
      <div className="container_story">
        <div className="container_img">
          <img src={image} alt="imagen" />
        </div>
        <div className="container_name">
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default ItemStoryHorizontal;
