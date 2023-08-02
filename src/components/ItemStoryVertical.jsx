import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";

const ItemStoryVertical = ({ image, name }) => {
  const [count, setCount] = React.useState(null);

  return (
    <div className="container_story_main">
      <div className="container_data">
        <img src={image} alt="imagen" className="container_data_img" />
        <span></span>
        <p className="container_data_name">{name}</p>
        <h2>...</h2>
      </div>
      <img src={image} alt="imagen" className="container_historie" />
      <div className="style_btn">
        <span>
          <AiOutlineHeart onClick={() => setCount(count + 1)} />
          <BsChat />
          <BsSend />
        </span>
        <BsBookmark />
      </div>
      <div className="container_likes">
        {count > 0 ? <h1>{count} Me gusta</h1> : ""}
      </div>
      <input type="text" placeholder="Agrega un comentario..." />
      <br />
    </div>
  );
};

export default ItemStoryVertical;
