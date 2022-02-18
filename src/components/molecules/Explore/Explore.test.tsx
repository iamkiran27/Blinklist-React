import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Explore from "./Explore";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <Explore
      openExplore={() => {
        console.log("Open explor");
      }}
    />
  );
  expect(screen.getByTestId("explore")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("explore"), { button: 0 });
});
