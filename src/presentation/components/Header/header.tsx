import { Link, useLocation } from "react-router-dom";

import AppLogo from "../AppLogo/app-logo";

import { linksToRender } from "./header-utils";

import "./header-styles.scss";

const Header: React.FC = () => {
  const location = useLocation();

  const defineLinkIsActive = (path: string) => {
    return location.pathname === path ? "--active" : "";
  };

  return (
    <header className="app-header">
      <nav className="app-header__navigation-bar">
        <Link to={"/"}>
          <AppLogo />
        </Link>

        <div className="app-header__links-container">
          {linksToRender.map(({ path, label }) => (
            <Link
              className={`app-header__link${defineLinkIsActive(path)}`}
              to={path}
              key={path}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
