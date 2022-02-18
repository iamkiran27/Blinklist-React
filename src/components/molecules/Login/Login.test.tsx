import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <Login
      logout={() => {
        console.log("Click me to logout!");
      }}
    />
  );
  expect(screen.getByTestId("login")).toBeInTheDocument();
});
