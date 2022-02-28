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
import { Grid } from "@mui/material";

const Navbar = () => {
  const [isNavExtended, setIsNavExtended] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <div className="navbar  " data-testid="navbar-test">
        <Grid container alignContent="center">
          <Grid item>
            <BlinkListLogo />
          </Grid>

          <Grid item>
            <div className="group__search">
              <SearchIconComponent />
            </div>
          </Grid>

          <Grid item>
            <li>
              <Explore
                isNavExtended={isNavExtended}
                openExplore={openExplore}
                setIsNavExtended={setIsNavExtended}
              />
            </li>
          </Grid>

          <Grid item>
            <li>My Library</li>
          </Grid>

          <Grid item marginLeft="53%">
            {!isAuthenticated ? (
              <Logout loginWithRedirect={loginWithRedirect} />
            ) : (
              <Login logout={logout} />
            )}
          </Grid>
        </Grid>
      </div>
      <ExploreContainer
        setIsNavExtended={setIsNavExtended}
        openExplore={openExplore}
      />
    </>
  );
};

export default Navbar;
