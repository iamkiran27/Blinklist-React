import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { openExplore } from "../../helperFunctions/helper";
import "./Navbar.css";

import { useAuth0 } from "@auth0/auth0-react";
import BlinkListLogo from "../../atoms/BlinklistLogo/BlinkListLogo";
import SearchIconComponent from "../../atoms/SearchIcon/SearchIconComponent";
import Explore from "../../molecules/Explore/Explore";
import Logout from "../../molecules/Logout/Logout";
import Login from "../../molecules/Login/Login";
import ExploreContainer from "../Explore/ExploreContainer";

const Navbar: React.FC = () => {
  const [isNavExtended, setIsNavExtended] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg " data-testid="navbar-test">
        <NavLink className="navbar-brand" to="/">
          {/* <img src={require("../atoms/logo.png")} height="30" alt="" /> */}
          <BlinkListLogo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <div className="group__search">
              <SearchIconComponent />
            </div>

            <li>
              <Explore
                isNavExtended={isNavExtended}
                openExplore={openExplore}
                setIsNavExtended={setIsNavExtended}
              />
            </li>

            <li>My Library</li>
          </ul>
          {!isAuthenticated ? (
            <Logout loginWithRedirect={loginWithRedirect} />
          ) : (
            <Login logout={logout} />
          )}
        </div>
      </nav>
      <ExploreContainer
        setIsNavExtended={setIsNavExtended}
        openExplore={openExplore}
      />
    </>
  );
};

export default Navbar;
