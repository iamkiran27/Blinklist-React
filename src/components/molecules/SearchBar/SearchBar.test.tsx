import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <SearchBar
      filter={(val = "") => console.log("input field entered.", val)}
      val={"abc"}
      setVal={(val = "") => {
        console.log("Handling text inputs.", val);
      }}
    />
  );
  expect(screen.getByTestId("inputField")).toBeInTheDocument();
  // fireEvent.change(screen.getByTestId("inputField"), {
  //   target: { value: "abc" },
  // });
});
