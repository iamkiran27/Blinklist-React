import React from "react";
import { render, screen } from "@testing-library/react";
import ReadNowButton from "./ReadNowButton";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<ReadNowButton />);
  expect(screen.getByRole("readNowButton")).toBeInTheDocument();
});
