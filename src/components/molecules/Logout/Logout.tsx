import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface LogoutI {
  loginWithRedirect: Function;
}

function Logout(props: LogoutI) {
  return (
    <div data-testid="logout" onClick={() => props.loginWithRedirect()}>
      <span data-testid="logout-span" className="group__items">
        <Typography>Account</Typography>

        <ExpandMoreIcon></ExpandMoreIcon>
      </span>
    </div>
  );
}

export default Logout;
