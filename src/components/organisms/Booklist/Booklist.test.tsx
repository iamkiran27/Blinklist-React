import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Booklist from "./Booklist";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <Booklist
        books={[
          {
            id: 5,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: false,
            added: true,
          },
        ]}
        handleFinishReading={(bookId = 0) => {
          console.log("Handle finish reading triggered.", bookId);
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("book-list")).toBeInTheDocument();
  expect(screen.getByTestId("book-list-card")).toBeInTheDocument();
  expect(screen.getByTestId("book-list-button")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("book-list-button"), { button: 0 });
});
