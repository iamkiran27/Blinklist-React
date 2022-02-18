import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BasicTabs from "./BasicTabs";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <BasicTabs
        data={[
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
        handleReadAgain={() => {
          console.log("Read again !!");
        }}
        handleFinishReading={() => {
          console.log("Handled finished reading ");
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("basic_tabs")).toBeInTheDocument();
  expect(screen.getByTestId("tabs-onChange")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("tabs-onChange"), {});
});
