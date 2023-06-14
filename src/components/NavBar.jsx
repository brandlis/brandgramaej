import React from "react";
import { navigation } from "../constants/navigation";
import { NavButton } from "./NavButton";

import logoIcon from "../assets/brandgram.png";

import "../styles/navBar.css";

export function NavBar() {
  return (
    <section className="container_navbar">
      <div className="container_logo">
        <div className="img_logo">
          <img className="img" src={logoIcon} alt="brandgram" />
        </div>
      </div>
      {navigation.map((item, index) => (
        <NavButton key={index} icon={item.icon} label={item.label} />
      ))}
    </section>
  );
}
