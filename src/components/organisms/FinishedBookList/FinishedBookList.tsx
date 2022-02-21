import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

import FinishedReadingCard from "../../molecules/FinishedReadingCard/FinishedReadingCard";

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
    <div className={style.list} data-testid="finish-div">
      <div className="row">
        {props.books.map((book) => {
          if (book.finished) {
            return (
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
