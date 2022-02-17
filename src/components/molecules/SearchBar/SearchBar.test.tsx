import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<SearchBar filter={() => console.log("input field entered.")} />);
  expect(screen.getByTestId("inputField")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("inputField"), {
    target: { value: "a" },
  });
});