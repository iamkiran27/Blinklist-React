import React from "react";
import { render, screen } from "@testing-library/react";
import BlinkListLogo from "./BlinkListLogo";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<BlinkListLogo />);
  expect(screen.getByTestId("logo")).toBeInTheDocument();
});
