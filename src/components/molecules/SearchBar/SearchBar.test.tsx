import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <SearchBar
      filter={() => console.log("input field entered.")}
      val={"abc"}
      setVal={() => {
        console.log("Handling text inputs.");
      }}
    />
  );
  expect(screen.getByTestId("inputField")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("inputField"), {
    // target: { value: "abc" },
  });
});
