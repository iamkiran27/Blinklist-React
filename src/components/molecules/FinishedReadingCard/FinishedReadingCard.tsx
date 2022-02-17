import React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { useStyles } from "../../organisms/FinishedBookList";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReadAgainButton from "../../atoms/ReadAgainButton/ReadAgainButton";

interface FinishedBookI {
  book: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  };
  handleReadAgain: Function;
}

function FinishedReadingCard(props: FinishedBookI) {
  const style = useStyles();
  return (
    <div>
      <Card
        sx={{
          maxWidth: "300px",
          marginBottom: 5,
          marginLeft: 8,
          borderRadius: "10px",
        }}
        key={props.book.id}
      >
        <CardMedia
          component="img"
          height="300px"
          image={props.book.image}
          alt="Book"
        />
        <CardContent>
          <Typography gutterBottom component="div" className={style.bookName}>
            {props.book.name}
          </Typography>

          <Typography className={style.authorName}>
            {props.book.author}
          </Typography>
          <Grid container className={style.gridMain}>
            <Grid item className={style.gridItem}>
              <AccessTimeIcon
                sx={{ height: "16.67px", width: "16.67px" }}
              ></AccessTimeIcon>
            </Grid>
            <Grid item className={style.gridItem}>
              <Typography className={style.readTypo}>
                {props.book.time}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="center"
            direction="row"
            alignContent="center"
          >
            <Grid item justifyContent="center">
              <ReadAgainButton
                handleReadAgain={props.handleReadAgain}
                boodId={props.book.id}
              />
            </Grid>
          </Grid>
        </CardContent>

        <Typography className={style.readingBar} />
      </Card>
    </div>
  );
}

export default FinishedReadingCard;
