import React from "react";
import ItemStoryHorizontal from "../components/ItemStoryHorizontal.tsx";
import { useFetchMain } from "../hooks/useFetchMain";

export const HistoriesHorizontal = () => {
  const { data } = useFetchMain();

  return (
    <div className="container_story-item">
      {data &&
        data.map((story, index) => {
          return <ItemStoryHorizontal key={index} image={story.image} />;
        })}
    </div>
  );
};
