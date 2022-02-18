import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ExploreContainer from "./ExploreContainer";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <ExploreContainer
        openExplore={() => {
          console.log("Explore event triggred ");
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("explore-container")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("explore-nav-link"), { button: 0 });
});
