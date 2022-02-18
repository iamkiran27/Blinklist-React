import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishedReadingCard from "./FinishedReadingCard";
import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <FinishedReadingCard
      book={{
        id: 5,
        image: "https://www.linkpicture.com/q/book6.png",
        name: "Loving Your Business",
        author: "Debbie King",
        time: "13-minute read",
        finished: false,
        added: false,
      }}
      handleReadAgain={() => {
        console.log("Handle Read again clicked");
      }}
    />
  );
  expect(screen.getByTestId("finish-reading-card")).toBeInTheDocument();
});
