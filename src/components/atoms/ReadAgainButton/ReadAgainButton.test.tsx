import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ReadAgainButton from "./ReadAgainButton";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <ReadAgainButton
      handleReadAgain={() => console.log("Read again button clicked")}
      boodId={0}
    />
  );
  expect(screen.getByRole("readAgainButton")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("readAgainButton"), { button: 0 });
});
