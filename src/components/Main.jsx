import React from "react";
import { HistoriesHorizontal } from "../components/HistoriesHorizontal.jsx";
import { HistoriesVertical } from "./HistoriesVertical.jsx";
import LoadHistories from "./LoadHistories.jsx";
import ProfileAndSuggestion from "./ProfileAndSuggestion.jsx";

export const Main = () => {
  return (
    <div>
      <HistoriesHorizontal />
      <HistoriesVertical />
      <ProfileAndSuggestion />
      <LoadHistories />
    </div>
  );
};
