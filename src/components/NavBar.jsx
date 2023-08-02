import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navigation } from "../constants/navigation";
import { NavButton } from "./NavButton";
import logoIcon from "../assets/brandgram.png";

import "../styles/navBar.css";

export function NavBar() {
  const more = { label: "Más", icon: <FontAwesomeIcon icon={faBars} /> };
  return (
    <section className="container_navbar">
      <img className="container_navbar_img" src={logoIcon} alt="brandgram" />
      <div className="container_navbar_content_navigation">
        <div className="container_navbar_navigation">
          {navigation.map((item, index) => (
            <NavButton key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
        <NavButton icon={more.icon} label={more.label} />
      </div>
    </section>
  );
}
