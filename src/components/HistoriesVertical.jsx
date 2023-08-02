import React from "react";
import { useFetchMain } from "../hooks/useFetchMain";
import ItemStoryVertical from "./ItemStoryVertical.jsx";

import "../styles/storiesvertical.css";

export const HistoriesVertical = () => {
  const { data } = useFetchMain();

  return (
    <div className="container_main">
      {data &&
        data.map((story, index) => {
          return (
            <ItemStoryVertical
              key={index}
              image={story.image}
              name={story.name}
            />
          );
        })}
    </div>
  );
};
