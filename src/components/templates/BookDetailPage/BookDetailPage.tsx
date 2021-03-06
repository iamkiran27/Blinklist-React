import { makeStyles } from "@material-ui/core";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useParams } from "react-router-dom";

import React from "react";

// import BookTabs from "../BookTabs/BookTabs";
import BookTabs from "../../organisms/BookTabs/BookTabs";
import ReadNowButton from "../../atoms/ReadNowButton/ReadNowButton";
import FinishReadingButton from "../../atoms/FinishReadingButton/FinishReadingButton";
import KindleButton from "../../atoms/KindleButton/KindleButton";

export const useStyles = makeStyles({
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
});

interface Handle {
  booksdata: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];

  handleFinish: (id: number) => void;
}

const BookDetailPage = (props: Handle) => {
  const { id } = useParams();

  const bookdata: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  } = props.booksdata.filter((book) => {
    return book.id.toString() === id;
  })[0];
  const [active, setActive] = React.useState(bookdata.finished);

  const classes = useStyles();
  return (
    <>
      <div className={classes.main} data-testid="book-detail-page">
        <Typography variant="body2" className={classes.authorTypo}>
          Get the key ideas from
        </Typography>
        <Grid container direction="row" marginTop={3}>
          <Grid item md={8}>
            <Grid direction="column">
              <Grid item>
                <Typography variant="h1" className={classes.heading}>
                  {bookdata.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" className={classes.subHeading}>
                  Turning your Business into a Enduring Great Company.
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.authorTypo}>
                  By {bookdata.author}
                </Typography>
              </Grid>
              <Grid container className={classes.gridMain}>
                <Grid item className={classes.gridItem}>
                  <AccessTimeIcon></AccessTimeIcon>
                </Grid>
                <Grid item className={classes.gridItem}>
                  <Typography variant="caption" className={classes.readTypo}>
                    {bookdata.time}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row" className={classes.buttonGrid}>
                <Grid item className={classes.readnow}>
                  <ReadNowButton />
                </Grid>
                <Grid item className={classes.finish}>
                  <FinishReadingButton
                    disabled={active}
                    bookId={bookdata.id}
                    setActive={setActive}
                    handleFinish={props.handleFinish}
                  />
                </Grid>
                <Grid item className={classes.kindle}>
                  <KindleButton />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img src={bookdata.image} alt="" />
          </Grid>
        </Grid>
        <BookTabs />
      </div>
    </>
  );
};

export default BookDetailPage;
