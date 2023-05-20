import { Link, useLocation } from "react-router-dom";

import InfojobsLogo from "@/presentation/assets/logos/infojobs-logo.svg";

import "./header-styles.scss";
import { linksToRender } from "./header-utils";

const Header: React.FC = () => {
  const location = useLocation();

  const defineLinkIsActive = (path: string) => {
    return location.pathname === path ? "--active" : "";
  };

  return (
    <header className="app-header">
      <nav className="app-header__navigation-bar">
        <Link to={"/"}>
          <InfojobsLogo />
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
