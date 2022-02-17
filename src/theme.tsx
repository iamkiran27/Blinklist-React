import React from "react";

import { makeStyles } from "@material-ui/core";
import { createTheme } from "@mui/material";
// import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
    width: "auto",
    textTransform: "none",
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "normal",
    paddingRight: "150px",
    paddingBottom: "16px",
    color: "#03314B",
    fontFamily: "Cera Pro",
  },
  tabContent: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
  },
  main: {
    width: "1100px",

    position: "relative",
    left: "380px",
    marginTop: "50px",
    marginBottom: "100px",
    padding: "8px",
    borderBottom: "1px solid #E1ECFC",
  },
  heading: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "40px",
    lineHeight: "45px",
    marginBottom: "28px",
  },
  subHeading: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "25px",
    marginBottom: "25px",
  },
  authorTypo: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#6D787E",
    marginBottom: "8px",
  },
  readTypo: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "12px",
    color: "#6D787E",
  },
  arrow: {
    marginLeft: "5px",
  },
  gridMain: {
    paddingTop: "10px",
  },
  gridItem: {
    paddingRight: "8px",
  },
  buttonGrid: {
    position: "relative",
    top: "70px",
    bottom: "0px",
  },
  readnow: {
    marginRight: "30px",
  },
  finish: {
    marginRight: "30px",
  },
  kindle: {},
  list: {
    marginBottom: "8px",
  },
  bookName: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "23px",
    paddingTop: "8px",
    paddingBottom: "8px",
    color: "#03314B",
  },
  authorName: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "20px",
    paddingBottom: "8px",
    color: "#6D787E",
  },

  more: {
    position: "relative",
    right: "0px",
    left: "245px",

    display: "flex",
    flexDirection: "column",
  },

  // readTypo: {
  //   alignItems: "center",
  //   fontStyle: "normal",
  //   fontSize: "14px",
  //   fontWeight: 400,
  //   color: "#6D787E",
  // },
  readingBar: {
    width: "100%",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "2px solid #E1ECFC",
    borderRadius: "0px 0px 8px 8px",
  },
  reading: {
    width: "100%px",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "2px solid #E1ECFC",

    borderRadius: "0px 0px 8px 8px",
  },
  button: {
    width: "100%",
    textTransform: "none",

    color: "#0365F2",
    border: "none",
    "&:hover": {
      backgroundColor: "#0365F2;",
      color: "#FFFFFF",
    },
  },
  card: {
    "&:hover": {
      backgroundColor: "#F1F6F4",
    },
  },
  banner: {
    width: "1200px",
    height: "267px",
    backgroundColor: "#F1F6F4",
    textAlign: "center",
    marginBottom: "10px",
    position: "relative",
    left: "380px",
  },
  entrepHeading: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "45px",
    color: "#03314B",
    textAlign: "left",
    position: "absolute",
    left: "4.93%",
    right: "60.09%",
    top: "17.05%",
    bottom: "48.86%",
  },
  entreSubHeading: {
    textAlign: "left",
    position: "absolute",
    left: "4.93%",
    right: "44.52%",
    top: "56.82%",
    bottom: "17.05%",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: " 23px",
    color: "#6D787E",
  },
  search: {
    width: "600px",
    position: "relative",
    left: "380px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  bannerImg: {
    position: "absolute",
    left: "70.76%",
    right: "1.93%",
    top: "6.44%",
    bottom: "6.44%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "1200px",

    position: "relative",
    left: "380px",
    padding: "8px",
    marginBottom: "10px",
  },
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
  landing: {
    marginLeft: "300px",

    padding: "24px 24px 24px 24px",
  },

  landingHeading: {
    position: "absolute",

    width: "190px",
    height: "45px",
    left: "380px",
    top: "145px",
    fontFamily: "Cera Pro",
    fontSize: "36px",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "45.25px",
    color: "#03314B",
  },
  hoverLinkColor: {
    "&:hover": {
      color: "pink",
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

export default useStyles;
