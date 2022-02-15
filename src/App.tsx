import React, { useEffect } from "react";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import RoutingPages from "./components/routing/routingPages";
import axios from "axios";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

const App: React.FC = () => {
  const [data, setData] = React.useState<
    {
      id: number;
      image: string;
      name: string;
      author: string;
      time: string;
      finished: boolean;
      added: boolean;
    }[]
  >([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/data")
      .then((books) => {
        console.log(books.data);
        setData(books.data);
      })
      .catch((err) => console.log("Error :", err));
  }, []);

  const handleFinish = (id: number) => {
    console.log("In handle finish ", id);

    const dataBooks: {
      id: number;
      image: string;
      name: string;
      author: string;
      time: string;
      finished: boolean;
      added: boolean;
    }[] = [];
    data.map((d) => {
      if (d.id === id) {
        d.finished = !d.finished;
      }
      dataBooks.push(d);
    });
    setData(dataBooks);
  };

  const handleReadAgain = (id: number) => {
    const dataBooks: {
      id: number;
      image: string;
      name: string;
      author: string;
      time: string;
      finished: boolean;
      added: boolean;
    }[] = [];

    data.map((d) => {
      if (d.id === id) {
        d.finished = !d.finished;
      }
      return dataBooks.push(d);
    });
    setData(dataBooks);
  };

  return (
    <ThemeProvider theme={theme}>
      {data.length == 0 ? (
        <h1>Loading....</h1>
      ) : (
        <div className="app" id="app">
          <RoutingPages
            data={data}
            handleReadAgain={handleReadAgain}
            handleFinish={handleFinish}
          />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
