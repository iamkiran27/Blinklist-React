import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Booklist from "./Booklist";

import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import book6 from "../../assets/book6.png";
import book7 from "../../assets/book7.png";
import book8 from "../../assets/book8.png";
import book9 from "../../assets/book9.png";
import beyond from "../../assets/beyond.png";

// import { makeStyles } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FinishedBookList from "./FinishedBooks";

const useStyles = makeStyles({
  tab: {
    width: "auto",
    textTransform: "none",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 400,
    paddingRight: "160px",
    paddingBottom: "16px",
    borderStyle: "none",
  },
});

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
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
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
    finished: true,
    added: true,
  },
  {
    id: 9,

    image: beyond,
    name: "Beyond Entrepreneurship",
    author: "Jim Collins",
    time: "13-minute read",
    finished: true,
    added: false,
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type BookData = {
  data: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  handleReadAgain: (id: number) => void;
  handleFinishReading: (id: number) => void;
};

export default function BasicTabs(props: BookData) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [data, setData] = React.useState(booksdata);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // const handleReadAgain = (id: number) => {
  //   console.log(id);
  //   const dataBooks: {
  //     id: number;
  //     image: string;
  //     name: string;
  //     author: string;
  //     time: string;
  //     finished: boolean;
  //     added: boolean;
  //   }[] = [];
  //   data.map((data) => {
  //     if (data.id == id) {
  //       data.finished = !data.finished;
  //     }
  //     dataBooks.push(data);
  //   });
  //   setData(dataBooks);
  // };

  return (
    <Box
      sx={{
        width: "1220px",
        marginTop: "100px",
        marginLeft: "50px",
        // backgroundColor: "pink",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "auto",
          // backgroundColor: "pink",
        }}
      >
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="basic tabs example"
          // style={{ backgroundColor: "gray" }}
          TabIndicatorProps={{
            style: { backgroundColor: "#22C870" },
          }}
        >
          <Tab
            label="Currently Reading "
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab label="Finished" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Booklist
          books={props.data}
          handleFinishReading={props.handleFinishReading}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FinishedBookList
          books={props.data}
          handleReadAgain={props.handleReadAgain}
        />
      </TabPanel>
    </Box>
  );
}
