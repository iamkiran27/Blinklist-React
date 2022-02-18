import React from "react";

function BlinkListLogo(props: any) {
  return (
    <div data-testid="logo">
      <a className="navbar-brand">
        <img src={require("../logo.png")} height="30" alt="" />
      </a>
    </div>
  );
}

export default BlinkListLogo;
