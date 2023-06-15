import React from "react";
import { Stories } from "../components/Stories";
import { HistoriesHorizontal } from "../components/HistoriesHorizontal.jsx";

import "../styles/stories.css";

export const Main = () => {
  return (
    <div className="container_stories">
      <HistoriesHorizontal />
      <Stories />
    </div>
  );
};
