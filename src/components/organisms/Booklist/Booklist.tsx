import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const useStyles = makeStyles({
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
  gridMain: {
    paddingTop: "10px",
  },

  more: {
    position: "relative",
    right: "0px",
    left: "245px",

    display: "flex",
    flexDirection: "column",
  },
  gridItem: {
    paddingRight: "4px",
  },
  readTypo: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
  },
  readingBar: {
    width: "100%",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "2px solid #E1ECFC",

    borderRadius: "0px 0px 8px 8px",
  },
});

type BookData = {
  books: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  handleFinishReading: (id: number) => void;
};

const Booklist = (props: BookData) => {
  const style = useStyles();
  return (
    <div className={style.list} data-testid="book-list">
      <div className="row">
        <Grid container>
          {props.books.map((book) => {
            if (!book.finished && book.added) {
              return (
                <div data-testid="book-list-card">
                  <Grid item>
                    <Card
                      sx={{
                        maxWidth: "300px",
                        marginBottom: 5,
                        marginLeft: 10,
                        borderRadius: "10px",
                      }}
                      key={book.name}
                    >
                      <CardMedia
                        src={book.image}
                        component="img"
                        height="300px"
                        alt="Book"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          component="div"
                          className={style.bookName}
                        >
                          {book.name}
                        </Typography>

                        <Typography className={style.authorName}>
                          {book.author}
                        </Typography>
                        <Grid container>
                          <Grid item className={style.gridItem}>
                            <AccessTimeIcon
                              sx={{ height: "16.67px", width: "16.67px" }}
                            ></AccessTimeIcon>
                          </Grid>
                          <Grid item className={style.gridItem}>
                            <Typography className={style.readTypo}>
                              {book.time}
                            </Typography>
                          </Grid>
                        </Grid>
                        <span className={style.more}>
                          <MoreHorizIcon></MoreHorizIcon>
                        </span>
                        <Button
                          data-testid="book-list-button"
                          onClick={(e) => {
                            props.handleFinishReading(book.id);
                          }}
                          sx={{ textTransform: "none", color: "blue" }}
                          variant="text"
                        >
                          Finish Reading
                        </Button>
                      </CardContent>

                      <Typography className={style.readingBar} />
                    </Card>
                  </Grid>
                </div>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Booklist;
