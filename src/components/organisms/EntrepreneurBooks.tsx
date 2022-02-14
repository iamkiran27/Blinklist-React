import { Button, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
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
  setData: Function;
  handleFinish: (id: number) => void;
};

export default function EntrepreneurBooks(props: BooksData) {
  const style = useStyles();
  return (
    <Grid container direction="row" alignItems="center" marginTop="10px">
      {props.booksdata.map((book) => {
        return (
          <Grid item xs={2} sm={3} md={4} lg={4} key={book.id}>
            <Card
              sx={{
                maxWidth: "300px",
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
                <Link color="black" underline="hover">
                  <Typography component="div">
                    <NavLink to={`/book/${book.id}`}>{book.name}</NavLink>
                  </Typography>
                </Link>
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
                <Button
                  sx={{
                    textTransform: "none",

                    color: "#0365F2",
                    border: "none",
                  }}
                  className={style.button}
                  variant="text"
                >
                  + Add to library
                </Button>
              )}
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
