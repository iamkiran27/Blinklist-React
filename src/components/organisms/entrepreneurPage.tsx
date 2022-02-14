import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";

import SearchBar from "../molecules/search";

import book1 from "../../assets/book1.png";

import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import book6 from "../../assets/book6.png";
import book7 from "../../assets/book7.png";
import book8 from "../../assets/book8.png";
import book9 from "../../assets/book9.png";
import beyond from "../../assets/beyond.png";
import { useState } from "react";
import Books from "./entrepreneurBooks";

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
const booksdata = [
  {
    id: 0,
    image: book1,
    name: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    finished: false,
    added: true,
  },
  {
    id: 1,

    image: beyond,
    name: "Beyond Entrepreneurship",
    author: "Jim Collins",
    time: "13-minute read",
    finished: false,
    added: false,
  },
  {
    id: 2,
    image: book3,
    name: `Doesn't Hurt to Ask`,
    author: "Trey Gowdy",
    time: "13-minute read",
    finished: false,
    added: true,
  },
  {
    id: 3,
    image: book4,
    name: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    finished: false,
    added: true,
  },
  {
    id: 4,

    image: book5,
    name: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    finished: false,
    added: true,
  },
  {
    id: 5,
    image: book6,
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    added: false,
  },
  {
    id: 6,
    image: book7,
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: false,
    added: true,
  },
  {
    id: 7,
    image: book8,
    name: "Eat Better, Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    finished: false,
    added: true,
  },
  {
    id: 8,
    image: book9,
    name: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    finished: false,
    added: true,
  },
];

const EntrepreneurPage = (props: BookData) => {
  const [data, setData] = useState(booksdata);
  const classes = useStyles();

  function FilterData(search: string) {
    console.log(search);
    const filteredBooks = booksdata.filter((book) => {
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
