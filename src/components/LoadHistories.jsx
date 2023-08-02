import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { useFetchMain } from "../hooks/useFetchMain";

import "../styles/load.css";

function LoadHistories() {
  const { setNextPage } = useFetchMain();

  return (
    <button className="container_load" onClick={() => setNextPage(2)}>
      <BsArrowDownCircle />
    </button>
  );
}

export default LoadHistories;
