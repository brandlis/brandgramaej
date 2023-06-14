import React from "react";

import "../styles/navBar.css";

export const NavButton = ({ label, icon }) => {
  console.log(label);
  return (
    <div className="container">
      <div className="container_button">
        <div className="items">
          <div className="item_icon">
            <div>{icon}</div>
          </div>
          <div className="item_label">
            <h1>{label}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
