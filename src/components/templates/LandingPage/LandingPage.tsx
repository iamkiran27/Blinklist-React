import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BasicTabs from "../../organisms/BasicTabs/BasicTabs";
import { Typography } from "@mui/material";

type BookData = {
  booksdata: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  handleReadAgain: (id: number) => void;
  handleFinish: (id: number) => void;
};
const useStyles = makeStyles(() => ({
  landing: {
    marginLeft: "300px",
    // backgroundColor: "blue",
    padding: "24px 24px 24px 24px",
  },

  heading: {
    position: "absolute",
    // backgroundColor: "orange",

    width: "190px",
    height: "45px",
    left: "380px",
    // top: "145px",
    fontFamily: "Cera Pro",
    fontSize: "36px",
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: "45.25px",
    color: "#03314B",
  },
}));

function LandingPage(props: BookData) {
  const style = useStyles();

  return (
    <>
      <div className={style.landing} data-testid="landing-page">
        <Typography>
          <h3 className={style.heading}>My Library</h3>
        </Typography>

        <BasicTabs
          data={props.booksdata}
          handleReadAgain={props.handleReadAgain}
          handleFinishReading={props.handleFinish}
        />
      </div>
    </>
  );
}

export default LandingPage;
