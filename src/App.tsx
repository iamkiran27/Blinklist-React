import React, { useEffect } from "react";
import Footer from "./components/organisms/Footer";
import LandingPage from "./components/organisms/Landingpage";
import Navbar from "./components/organisms/Navbar";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EntrepreneurPage from "./components/organisms/entrepreneurPage";
import BookDetailPage from "./components/organisms/BookDetail";
import RoutingPages from "./components/routing/routingPages";

import book1 from "./assets/book1.png";
import book2 from "./assets/book2.png";
import book3 from "./assets/book3.png";
import book4 from "./assets/book4.png";
import book5 from "./assets/book5.png";
import book6 from "./assets/book6.png";
import book7 from "./assets/book7.png";
import book8 from "./assets/book8.png";
import book9 from "./assets/book9.png";
import beyond from "./assets/beyond.png";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
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
  {
    id: 9,
    image: book2,
    name: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    finished: false,
    added: false,
  },
];

const App: React.FC = () => {
  const [data, setData] = React.useState(booksdata);

  useEffect(() => {
    console.log("Data : ", data);
  }, [data]);

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
    data.map((data) => {
      if (data.id === id) {
        data.finished = !data.finished;
      }
      dataBooks.push(data);
    });
    setData(dataBooks);
    // console.log("After finished button clicked", data);
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
    data.map((data) => {
      if (data.id === id) {
        data.finished = !data.finished;
      }
      dataBooks.push(data);
    });
    setData(dataBooks);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app" id="app">
        {/* <Navbar />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  bookdata={data}
                  handleReadAgain={handleReadAgain}
                  handleFinishReading={handleFinish}
                />
              }
            />
            <Route
              path="/entrepreneur"
              element={
                <EntrepreneurPage
                  booksdata={data}
                  handleFinish={handleFinish}
                />
              }
            />
            <Route
              path="/book/:id"
              element={
                <BookDetailPage books={data} handleFinish={handleFinish} />
              }
            />
          </Routes>
        </BrowserRouter>

        <Footer /> */}
        <RoutingPages
          data={data}
          handleReadAgain={handleReadAgain}
          handleFinish={handleFinish}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
