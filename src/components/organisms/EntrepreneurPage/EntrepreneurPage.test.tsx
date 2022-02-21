import React from "react";
import { render, screen } from "@testing-library/react";
import EntrepreneurPage from "./EntrepreneurPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render Entrepreneur Books", () => {
  render(
    <MemoryRouter>
      <EntrepreneurPage
        booksdata={[
          {
            id: 5,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: false,
            added: true,
          },
          {
            id: 4,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: false,
            added: false,
          },
        ]}
        handleFinish={(bookId = 0) => {
          console.log("Handle finish reading triggered.", bookId);
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("entrepreneur-page")).toBeInTheDocument();
  //   expect(screen.getByTestId("entrepreneur-list-card")).toBeInTheDocument();
  //   expect(screen.getByTestId("no-books")).toBeInTheDocument();
});