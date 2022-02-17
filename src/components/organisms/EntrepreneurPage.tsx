import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import SearchBar from "../molecules/SearchBar/SearchBar";
import { useState } from "react";
import Books from "./EntrepreneurBooks";

const useStyles = makeStyles({
  banner: {
    width: "1200px",
    height: "267px",
    backgroundColor: "#F1F6F4",
    textAlign: "center",
    marginBottom: "10px",
    position: "relative",
    left: "380px",
  },
  heading: {
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
  subHeading: {
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
});

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
  handleFinish: (id: number) => void;
};

const EntrepreneurPage = (props: BookData) => {
  const [data, setData] = useState(props.booksdata);
  const classes = useStyles();

  function FilterData(search: string) {
    console.log(search);
    const filteredBooks = props.booksdata.filter((book) => {
      return (
        book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        book.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    });
    setData(filteredBooks);
  }

  return (
    <>
      <div className={classes.banner}>
        <Typography className={classes.heading}>
          Explore Books on <br />
          entreprenship
        </Typography>
        <Typography className={classes.subHeading}>
          Everything you need to know about thriving on a<br /> shostring
          budget,making your first million, and hiring-
          <br /> right from start
        </Typography>
        <img
          src={require("../../assets/banner.png")}
          alt="banner"
          className={classes.bannerImg}
        />
      </div>
      <div className={classes.search}>
        <SearchBar filter={FilterData} />
      </div>
      <div className={classes.content}>
        <Typography variant="h5">Trending blinks</Typography>

        <Books
          booksdata={data}
          setData={setData}
          handleFinish={props.handleFinish}
        />
      </div>
    </>
  );
};

export default EntrepreneurPage;
