import React from "react";

// interface LogoPath {
//   path: string;
// }

function BlinkListLogo(props: any) {
  return (
    <div>
      <a className="navbar-brand">
        <img src={require("../logo.png")} height="30" alt="" />
      </a>
    </div>
  );
}

export default BlinkListLogo;
