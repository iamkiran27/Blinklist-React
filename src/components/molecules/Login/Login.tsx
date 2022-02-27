import React from "react";
import { Avatar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../organisms/Navbar/Navbar.css";

interface LoginI {
  logout: Function;
}

function Login(props: LoginI) {
  return (
    <div data-testid="login" onClick={() => props.logout()}>
      <span className="group__items">
        <Avatar sx={{ bgcolor: "orange" }}>K</Avatar>
        <ExpandMoreIcon></ExpandMoreIcon>
      </span>
    </div>
  );
}

export default Login;
