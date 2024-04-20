import { useContext } from "react";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import DashboardContext from "../context/DashboardContext";

const NavLinks = ({ isBigSidebar }) => {
  const { _fn, user } = useContext(DashboardContext);
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : _fn.toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
