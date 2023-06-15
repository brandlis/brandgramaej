import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faCommentDots,
  faCompass,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

import Profile from "../assets/profile1.jpg";

export const navigation = [
  { label: "Inicio", icon: <FontAwesomeIcon icon={faHouse} /> },
  { label: "Buscar", icon: <FontAwesomeIcon icon={faMagnifyingGlass} /> },
  { label: "Explorar", icon: <FontAwesomeIcon icon={faCompass} /> },
  { label: "Reels", icon: <FontAwesomeIcon icon={faClapperboard} /> },
  { label: "Mensajes", icon: <FontAwesomeIcon icon={faCommentDots} /> },
  { label: "Notificaciones", icon: <FontAwesomeIcon icon={faHeart} /> },
  { label: "Crear", icon: <FontAwesomeIcon icon={faSquarePlus} /> },
  { label: "Perfil", icon: <img src={Profile} alt="Perfil" /> },
];
