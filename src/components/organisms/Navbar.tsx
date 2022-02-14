import { Avatar, Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import deepOrange from "@mui/material/colors/deepOrange";

import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/">
          <img src={require("../atoms/logo.png")} height="30" alt="" />
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
              <SearchIcon fontSize="medium"></SearchIcon>
            </div>

            <li>
              <div
                className="group__items"
                onClick={(e) => {
                  openExplore(e);
                }}
              >
                Explore
                <ExpandMoreIcon></ExpandMoreIcon>
              </div>
            </li>

            <li>My Library</li>
          </ul>
          <span className="group__items">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>K</Avatar>
            <ExpandMoreIcon></ExpandMoreIcon>
          </span>
        </div>
      </nav>
      <div
        id="explore"
        style={{
          display: "none",
          width: "100%",
          backgroundColor: "#F1F6F4",
          height: "360px",
        }}
      >
        <Grid container justifyContent="center" marginTop={3}>
          <Grid item md={2.5}>
            <Box borderBottom={1} paddingBottom={2}>
              <Typography color="#116BE9">Explore by category</Typography>
            </Box>
            <Box marginTop={3} paddingTop={2}>
              <NavLink onClick={openExplore} to="/entrepreneur">
                <Box>
                  <Grid container>
                    <Grid item>
                      <RocketOutlinedIcon></RocketOutlinedIcon>
                    </Grid>

                    <Grid item>
                      <Typography>Entreprenership</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </NavLink>

              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Science</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Economics</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Corporate Culture</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Psychology</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2.5}>
            <Box borderBottom={1} paddingBottom={2}>
              See recently titles
            </Box>
            <Box marginTop={3} paddingTop={2}>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Politics</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Health & Nutrition</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>History</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Motivation & Inspiration</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Productivity</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item md={2.5}>
            <Box borderBottom={1} paddingBottom={2}>
              See popular titles
            </Box>
            <Box marginTop={3} paddingTop={2}>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>MArketing & Sales</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Personal Development</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Communication Skills</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Money & Investments</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item>
                    <RocketOutlinedIcon></RocketOutlinedIcon>
                  </Grid>
                  <Grid item>
                    <Typography>Education</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Navbar;
export function openExplore(e: React.MouseEvent) {
  if (document.getElementById("explore")?.style.display === "none") {
    const ele = document.getElementById("explore") as HTMLElement;
    ele.style.display = "block";
    ele.style.position = "absolute";
    console.log(e.target);

    ele.style.zIndex = "999";
  } else {
    const ele = document.getElementById("explore") as HTMLElement;
    ele.style.display = "none";
  }
}
