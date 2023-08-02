import React from "react";
import { useFetchMain } from "../hooks/useFetchMain";
import ItemStoryHorizontal from "../components/ItemStoryHorizontal.tsx";
import ArrowButton from "./ArrowButton";

import "../styles/stories.css";

export const HistoriesHorizontal = () => {
  const { data } = useFetchMain();

  return (
    <>
      <div className="container">
        {data &&
          data.splice(6, 7).map((story, index) => {
            return (
              <ItemStoryHorizontal
                key={index}
                image={story.image}
                name={story.name}
              />
            );
          })}
      </div>
      <ArrowButton />
    </>
  );
};
