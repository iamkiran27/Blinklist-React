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
  expect(screen.getByTestId("exploreNavButton")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("exploreNavButton"), { button: 0 });
});
