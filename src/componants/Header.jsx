import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSackXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const activeStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#eef1f5" : "",
    color: isActive ? "#06070c" : "",
    // padding: isActive ? "10px 20px" : "0px 20px",
    borderRadius: isActive && "30px"
  });
  return (
    <nav className="sidebar">
      <NavLink to="/" style={activeStyle} className="navLink">
        <FontAwesomeIcon icon={faInbox} /> Inbox
      </NavLink>
      <NavLink to="/spam" style={activeStyle} className="navLink">
        <FontAwesomeIcon icon={faSackXmark} /> Spam
      </NavLink>
      <NavLink to="/trash" style={activeStyle} className="navLink">
        <FontAwesomeIcon icon={faTrash} /> Trash
      </NavLink>
    </nav>
  );
};
