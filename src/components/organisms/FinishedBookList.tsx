import makeStyles from "@material-ui/core/styles/makeStyles";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReadAgainButton from "../atoms/ReadAgainButton/ReadAgainButton";
import FinishedReadingCard from "../molecules/FinishedReadingCard/FinishedReadingCard";

export const useStyles = makeStyles({
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

type FinishedBookData = {
  books: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  handleReadAgain: (id: number) => void;
};

const FinishedBookList = (props: FinishedBookData) => {
  console.log("data in finished tab ", props.books);
  const style = useStyles();
  return (
    <div className={style.list}>
      <div className="row">
        {props.books.map((book) => {
          if (book.finished) {
            return (
              // <div>
              //   <Card
              //     sx={{
              //       maxWidth: "300px",
              //       marginBottom: 5,
              //       marginLeft: 8,
              //       borderRadius: "10px",
              //     }}
              //     key={book.id}
              //   >
              //     <CardMedia
              //       component="img"
              //       height="300px"
              //       image={book.image}
              //       alt="Book"
              //     />
              //     <CardContent>
              //       <Typography
              //         gutterBottom
              //         component="div"
              //         className={style.bookName}
              //       >
              //         {book.name}
              //       </Typography>

              //       <Typography className={style.authorName}>
              //         {book.author}
              //       </Typography>
              //       <Grid container className={style.gridMain}>
              //         <Grid item className={style.gridItem}>
              //           <AccessTimeIcon
              //             sx={{ height: "16.67px", width: "16.67px" }}
              //           ></AccessTimeIcon>
              //         </Grid>
              //         <Grid item className={style.gridItem}>
              //           <Typography className={style.readTypo}>
              //             {book.time}
              //           </Typography>
              //         </Grid>
              //       </Grid>
              //       <Grid
              //         container
              //         justifyContent="center"
              //         direction="row"
              //         alignContent="center"
              //       >
              //         <Grid item justifyContent="center">
              //           {/* <Button
              //             onClick={(e) => {
              //               props.handleReadAgain(book.id);
              //             }}
              //             sx={{ textTransform: "none", color: "blue" }}
              //             variant="text"
              //           >
              //             Read again
              //           </Button> */}
              //           <ReadAgainButton
              //             handleReadAgain={props.handleReadAgain}
              //             boodId={book.id}
              //           />
              //         </Grid>
              //       </Grid>
              //     </CardContent>

              //     <Typography className={style.readingBar} />
              //   </Card>
              // </div>
              <FinishedReadingCard
                book={book}
                handleReadAgain={props.handleReadAgain}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FinishedBookList;
