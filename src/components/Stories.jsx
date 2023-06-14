import React from "react";
import { useFetchMain } from "../hooks/useFetchMain";

export function Stories() {
  const { data, loading } = useFetchMain();
  return (
    <div>
      <h1>
        {data &&
          data.map((data, index) => {
            return (
              <div key={index}>
                <img src={data.image} alt="" />
              </div>
            );
          })}
      </h1>
    </div>
  );
}
