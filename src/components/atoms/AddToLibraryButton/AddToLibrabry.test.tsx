import React from "react";
import { render, screen } from "@testing-library/react";
import AddToLibraryButton from "./AddToLibraryButton";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(<AddToLibraryButton />);
  expect(screen.getByRole("addToLibrary")).toBeInTheDocument();
});
