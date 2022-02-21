import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ReadAgainButton from "./ReadAgainButton";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <ReadAgainButton
      handleReadAgain={(bookId = 0) =>
        console.log("Read again button clicked", bookId)
      }
      bookId={4}
    />
  );
  expect(screen.getByRole("readAgainButton")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("readAgainButton"), { button: 0 });
});
