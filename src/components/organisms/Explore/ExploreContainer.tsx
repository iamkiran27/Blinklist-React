import React, { MouseEventHandler } from "react";
import { Box, Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";

interface ExploreI {
  openExplore: Function;
  setIsNavExtended: Function;
}

function ExploreContainer(props: ExploreI) {
  return (
    <div
      data-testid="explore-container"
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
            {/* <Button
              // hidden={true}
              data-testid="exploreNavButton"
              onClick={(e) => {
                props.openExplore();
              }}
            > */}
            <Typography>
              <NavLink
                data-testid="exploreNavButton"
                onClick={() => {
                  props.openExplore();
                  props.setIsNavExtended(false);
                }}
                to="/entrepreneur"
              >
                <Box>
                  <Grid container>
                    <Grid item>
                      <RocketOutlinedIcon></RocketOutlinedIcon>
                    </Grid>

                    <Grid item>Entreprenership</Grid>
                  </Grid>
                </Box>
              </NavLink>
            </Typography>
            {/* </Button> */}

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
  );
}

export default ExploreContainer;
