import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Logout from "./Logout";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <Logout
      loginWithRedirect={() => {
        console.log("CLick me to login ");
      }}
    />
  );
  expect(screen.getByTestId("logout")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("logout"), { button: 0 });
});
