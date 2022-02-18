import React from "react";
import { render, screen } from "@testing-library/react";
import KindleButton from "./KindleButton";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<KindleButton />);
  expect(screen.getByRole("kindleButton")).toBeInTheDocument();
});
