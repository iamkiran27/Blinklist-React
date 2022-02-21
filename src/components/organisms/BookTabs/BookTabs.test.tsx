import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookTabs from "./BookTabs";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <BookTabs />
    </MemoryRouter>
  );
  expect(screen.getByTestId("book-tabs")).toBeInTheDocument();
  expect(screen.getByTestId("book-tabs-onChange")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("book-tabs-onChange"), {});
});
