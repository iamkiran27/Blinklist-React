import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookDetailPage from "./BookDetailPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
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
    </MemoryRouter>
  );
  expect(screen.getByTestId("book-detail-page")).toBeInTheDocument();
});
