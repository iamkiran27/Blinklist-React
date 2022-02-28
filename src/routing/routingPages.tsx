import Footer from "../components/organisms/Footer/Footer";

import Navbar from "../components/organisms/Navbar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "../components/templates/LandingPage/LandingPage";
import EntrepreneurPage from "../components/templates/EntrepreneurPage/EntrepreneurPage";
import BookDetailPage from "../components/templates/BookDetailPage/BookDetailPage";

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
    <>
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
    </>
  );
};

export default RoutingPages;
