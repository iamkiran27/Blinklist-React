import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishReadingButton from "./FinishReadingButton";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <FinishReadingButton
        disabled={true}
        bookId={0}
        setActive={(disabled = true) => {
          console.log("Finish reading button state is managed", disabled);
        }}
        handleFinish={(bookId = 0) => {
          console.log("Handle finish button clicked.", bookId);
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("finishReading")).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("finishReading"), { button: 0 });
});
