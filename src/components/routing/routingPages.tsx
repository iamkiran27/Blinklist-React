import Footer from "../organisms/Footer/Footer";
import LandingPage from "../organisms/LandingPage/LandingPage";
import Navbar from "../organisms/Navbar/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import EntrepreneurPage from "../organisms/EntrepreneurPage/EntrepreneurPage";
import BookDetailPage from "../organisms/BookDetailPage/BookDetailPage";

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
