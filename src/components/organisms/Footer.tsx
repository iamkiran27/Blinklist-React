import "./Footer.css";
import { Box, Container, Grid, Link, Theme, Typography } from "@mui/material";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BlinkListLogo from "../atoms/BlinklistLogo/BlinkListLogo";

const useStyles = makeStyles((theme: Theme) => ({
  lnkstl: {
    weight: "bold",
    color: "#0365F2",
  },
  lnk: {
    paddingBottom: "2px",
    fontFamily: "Cera Pro",
    fontSize: "18px",
  },
  lnkb: {
    paddingBottom: "2px",
    fontFamily: "Cera Pro",
    fontSize: "18px",
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 7 }}
        py={{ xs: 5, sm: 7 }}
        bgcolor="#f1f6f4"
        color="#4d4d4d"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box borderBottom={2}>
                {/* <a className="navbar-brand">
                  <img src={require("../atoms/logo.png")} height="30" alt="" />
                </a> */}
                <BlinkListLogo />
              </Box>
              <Box>
                <br></br>
                <Typography variant="h4" className={classes.lnkstl}>
                  Big ideas in small packages Start learnign now
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box marginTop={2} borderBottom={2} className={classes.lnkb}>
                Editorial
              </Box>
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Book lists
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  What is Nonfiction?
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  What to read next?
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  Benefits of reading
                </Link>
              </Box>{" "}
              <br />
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box marginTop={2} borderBottom={2} className={classes.lnkb}>
                Useful Links
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Pricing
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Blinkist business
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Gift cards
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Blinkist magaine
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit" className={classes.lnk}>
                  Contact & help
                </Link>
              </Box>{" "}
              <br />
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box marginTop={2} borderBottom={2} className={classes.lnkb}>
                Company
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  About
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  Careers
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  Partners Code of Conduct
                </Link>
              </Box>{" "}
              <br />
              <Box>
                <Link underline="hover" color="inherit">
                  Code of Conduct
                </Link>
              </Box>{" "}
              <br />
            </Grid>
          </Grid>
          <Box textAlign="left" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
            Policies
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
