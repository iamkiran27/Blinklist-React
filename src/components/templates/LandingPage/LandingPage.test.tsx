import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <LandingPage
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
          {
            id: 3,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: false,
            added: true,
          },
          {
            id: 1,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: true,
            added: false,
          },
          {
            id: 4,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: true,
            added: true,
          },
        ]}
        handleReadAgain={function (id: number): void {
          console.log("Reaf again :", id);
        }}
        handleFinish={function (id: number): void {
          console.log("finish reading : ", id);
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("landing-page")).toBeInTheDocument();
});
