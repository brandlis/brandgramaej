import React from "react";

export const NavButton = ({ label, icon }) => {
  return (
    <div className="container_navbar_navigation_items">
      <div className="container_navbar_navigation_items_icon">
        <div>{icon}</div>
      </div>
      <div className="container_navbar_navigation_label">
        <h1>{label}</h1>
      </div>
    </div>
  );
};
