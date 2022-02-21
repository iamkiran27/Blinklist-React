import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Booklist from "../Booklist/Booklist";
import useStyles from "../../../theme";

import FinishedBookList from "../FinishedBookList/FinishedBookList";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      data-testid="basic_tabs"
      sx={{
        width: "1220px",
        marginTop: "100px",
        marginLeft: "50px",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "auto",
        }}
      >
        <Tabs
          data-testid="tabs-onChange"
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="basic tabs example"
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
