import React from "react";
import { NavLink } from "react-router-dom";

function BlinkListLogo(props: any) {
  return (
    <div data-testid="logo">
      {/* <a className="navbar-brand"> */}
      <NavLink to="/">
        <img src={require("../logo.png")} height="30" alt="" />
      </NavLink>
      {/* </a> */}
    </div>
  );
}

export default BlinkListLogo;
