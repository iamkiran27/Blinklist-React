import React from "react";
import { render, screen } from "@testing-library/react";
import SearchIconComponent from "./SearchIconComponent";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<SearchIconComponent />);
  expect(screen.getByTestId("search-icon")).toBeInTheDocument();
});
