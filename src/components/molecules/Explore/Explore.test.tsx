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
      isNavExtended={true}
      setIsNavExtended={(isNavExtended = false) => {
        console.log("Nav expanded ", isNavExtended);
      }}
    />
  );
  expect(screen.getByTestId("explore")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("explore"), { button: 0 });
});
