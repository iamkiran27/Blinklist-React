import React from "react";
import { render, screen } from "@testing-library/react";
import FinishedBookList from "./FinishedBookList";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <FinishedBookList
        books={[
          {
            id: 5,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: true,
            added: false,
          },
          {
            id: 3,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: false,
            added: false,
          },
        ]}
        handleReadAgain={function (id: number): void {
          console.log("Finished rrading the book ", id);
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("finish-div")).toBeInTheDocument();
  //   expect(screen.getByTestId("book-list-card")).toBeInTheDocument();
  //   expect(screen.getByTestId("book-list-button")).toBeInTheDocument();
  //   fireEvent.click(screen.getByTestId("book-list-button"), { button: 0 });
});
