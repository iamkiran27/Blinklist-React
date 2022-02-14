import React from "react";
import Footer from "../organisms/Footer";
import LandingPage from "../organisms/Landingpage";
import Navbar from "../organisms/Navbar";
// import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EntrepreneurPage from "../organisms/entrepreneurPage";
import BookDetailPage from "../organisms/BookDetail";

interface Props {
  data: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    added: boolean;
  }[];
  handleFinish: (id: number) => void;
  handleReadAgain: (id: number) => void;
}

const RoutingPages = (props: Props) => {
  return (
    //   <div className="app" id="app">
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                booksdata={props.data}
                handleReadAgain={props.handleReadAgain}
                handleFinish={props.handleFinish}
              />
            }
          />
          <Route
            path="/entrepreneur"
            element={
              <EntrepreneurPage
                booksdata={props.data}
                handleFinish={props.handleFinish}
              />
            }
          />
          <Route
            path="/book/:id"
            element={
              <BookDetailPage
                booksdata={props.data}
                handleFinish={props.handleFinish}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default RoutingPages;
