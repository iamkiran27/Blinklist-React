import React from "react";
import {
  findByAltText,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import BookDetailPage from "./BookDetailPage";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// test("Render SearchIcon Button", () => {
//   render(
//     <MemoryRouter>
//       <BookDetailPage
//         booksdata={[
//           {
//             id: 5,
//             image: "https://www.linkpicture.com/q/book6.png",
//             name: "Loving Your Business",
//             author: "Debbie King",
//             time: "13-minute read",
//             finished: false,
//             added: false,
//           },
//         ]}
//         handleFinish={() => {
//           console.log("Handle finish triggerd");
//         }}
//       />
//     </MemoryRouter>
//   );
//   expect(screen.getByTestId("book-detail-page")).toBeInTheDocument();
// });

test("my Component test", async () => {
  const id = "5";

  render(
    <MemoryRouter initialEntries={[`/book/${id}`]}>
      <Routes>
        <Route
          path="/book/:id"
          element={
            <BookDetailPage
              booksdata={[
                {
                  id: 5,
                  image: "https://www.linkpicture.com/q/book6.png",
                  name: "Loving Your Business",
                  author: "Debbie King",
                  time: "13-minute read",
                  finished: false,
                  added: false,
                },
              ]}
              handleFinish={() => {
                console.log("Handle finish triggerd");
              }}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  await screen.findByTestId("book-detail-page");
});
