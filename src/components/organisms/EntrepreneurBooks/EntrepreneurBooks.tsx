import { Button, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import AddToLibraryButton from "../../atoms/AddToLibraryButton/AddToLibraryButton";

export const useStyles = makeStyles({
  reading: {
    width: "100%",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",

    border: "2px solid #E1ECFC",

    borderRadius: "0px 0px 8px 8px",
  },
  button: {
    width: "inherit",
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
});

type BooksData = {
  booksdata: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  // setData: Function;
  handleFinish: (id: number) => void;
};

export default function EntrepreneurBooks(props: BooksData) {
  const style = useStyles();
  return (
    <Grid
      data-testid="entrepreneur-books"
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      marginTop="10px"
    >
      {props.booksdata.length > 0 ? (
        props.booksdata.map((book) => {
          return (
            <Grid item xs={2} sm={3} md={4} lg={4} key={book.id}>
              <Card
                // data-testid="entrepreneur-list-card"
                sx={{
                  width: "300px",

                  marginBottom: 5,
                  marginLeft: 5,
                  borderRadius: "10px",
                }}
                className={book.added ? " " : style.card}
                key={book.name}
              >
                <CardMedia
                  component="img"
                  height="300px"
                  image={book.image}
                  alt="Book"
                />
                <CardContent style={{}}>
                  <NavLink to={`/book/${book.id}`}>
                    <Typography>{book.name}</Typography>
                  </NavLink>

                  <Typography>{book.author}</Typography>
                  <Grid container>
                    <Grid item>
                      <AccessTimeIcon
                        sx={{ height: "16.67px", width: "16.67px" }}
                      ></AccessTimeIcon>
                    </Grid>
                    <Grid item>
                      <Typography>{book.time}</Typography>
                    </Grid>
                  </Grid>
                  <span>
                    <MoreHorizIcon></MoreHorizIcon>
                  </span>
                </CardContent>
                {book.added ? (
                  <Typography className={style.reading} />
                ) : (
                  <AddToLibraryButton />
                )}
              </Card>
            </Grid>
          );
        })
      ) : (
        <Grid item data-testid="no-books">
          <Typography variant="h4" color="tomato">
            No books found !!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}
