import makeStyles from "@material-ui/core/styles/makeStyles";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { flexbox } from "@mui/system";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    // backgroundColor: "gray",

    marginBottom: "8px",

    // height: "100%",
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
    // backgroundColor: "gray",
    // width: "100%",
  },

  more: {
    position: "relative",
    right: "0px",
    left: "245px",
    // backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",

    // left: "0px",
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
    // boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
    // top: "25px",
    // top: "10px",
    // bottom: "0px",
  },
  readingBarProgress: {},
  parent: {
    // padding: "4px",
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
    <div className={style.list}>
      <div className="row">
        {props.books.map((book) => {
          if (!book.finished && book.added) {
            return (
              <div>
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
                    component="img"
                    height="300px"
                    image={book.image}
                    alt="Book"
                  />
                  <CardContent className={style.parent}>
                    {/* <NavLink
                      // underline="hover"
                      to="/"
                      style={{ textDecoration: "none" }}
                    > */}
                    <Typography
                      gutterBottom
                      component="div"
                      className={style.bookName}
                    >
                      {book.name}
                    </Typography>
                    {/* </NavLink> */}
                    <Typography className={style.authorName}>
                      {book.author}
                    </Typography>
                    <Grid
                      container
                      className={style.gridMain}
                      // justifyContent="center"
                      // alignItems="center"
                    >
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
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Booklist;
